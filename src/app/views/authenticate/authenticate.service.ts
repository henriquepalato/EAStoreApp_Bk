import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

// Services
import { StorageService } from './../../shared/services/storage.service';
import { ConfigService } from '../../shared/services/config.service';
import { HttpUtilService } from '../../shared/services/http-util.service';

// Models
import { Session } from './../../shared/models/commons/Session';
import { HandleError, HttpErrorHandler } from './../../shared/services/http-error-handler.service';
import { SessionService } from './../../shared/services/session.service';
import { User } from './../../shared/models/authenticate/User';

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    private handleError: HandleError;
    public onCredentialUpdated$: Subject<Session>;
    constructor(
        private http: HttpClient,
        private router: Router,
        httpErrorHandler: HttpErrorHandler,
        private storageService: StorageService,
        private httpUtilService: HttpUtilService,
        private sessionService: SessionService
    ) {
        this.handleError = httpErrorHandler.createHandleError('login');
        this.onCredentialUpdated$ = new Subject();
    }

    public login(username: string, password: string) {
        const params = 'username=' + username + '&password=' + password + '&grant_type=password';
        return this.http.post(this.httpUtilService.url('Token'), params)
            .pipe(
                tap(this.saveSession.bind(this)),
                catchError(this.handleError('login'))
            );
    }

    public logout(refresh?: boolean): void {
        this.storageService.clear();
        this.router.navigate(['/auth/login']);
    }

    private saveSession(session: Session) {
        if (typeof session !== 'undefined') {
            this.storageService.setToken(session.access_token);
            this.storageService.setSessionStorage(ConfigService.Storage.Session, session.Session);
            this.onCredentialUpdated$.next(session);
        }
    }

    public requestPassword(user: User) {
        return this.http.post(this.httpUtilService.url('api/usuarios/ForgotPassword/'), user)
            .pipe(
                catchError(this.handleError('Restauração da senha'))
            );
    }

    public requestPasswordCpf(cpf) {
        return this.http.get(this.httpUtilService.url('api/usuarios/requestPasswordCpf/' + cpf))
            .pipe(
                catchError(this.handleError('Restauração da senha'))
            );
    }

    roleMatch(url): boolean {
        const isMatch = false;
        const session: Session = this.sessionService.getSession();
        return isMatch;
    }

    ChangePassword(user: User) {
        return this.http.post(this.httpUtilService.url('api/usuarios/ChangePassword/'), user,
            this.httpUtilService.getHTTPHeaderAuthorization())
            .pipe(
                catchError(this.handleError('Restauração de senha'))
            );
    }
}
