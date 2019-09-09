import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { Observable, of } from 'rxjs';
import * as CryptoJS from 'crypto-js';
@Injectable({
    providedIn: 'root',
})

export class StorageService {
    public clear() {
        sessionStorage.removeItem(ConfigService.Storage.Token);
        sessionStorage.removeItem(ConfigService.Storage.Session);
        sessionStorage.removeItem(ConfigService.Storage.Mutuario);
    }

    // Tokens
    public getToken(): Observable<string> {
        const bytes = CryptoJS.AES.decrypt(sessionStorage.getItem(ConfigService.Storage.Token).toString(), ConfigService.Config.Password);
        return bytes.toString(CryptoJS.enc.Utf8);
    }

    removeToken() {
        sessionStorage.removeItem(ConfigService.Storage.Token);
    }

    setToken(token: string) {
        sessionStorage.setItem(ConfigService.Storage.Token, CryptoJS.AES.encrypt(token, ConfigService.Config.Password));
    }

    // Session
    setSessionStorage(keyParam: string, session) {
        sessionStorage.setItem(keyParam, CryptoJS.AES.encrypt(JSON.stringify(session), ConfigService.Config.Password).toString());
    }

    getSessionStorage(keyParam: string) {
        const storage = sessionStorage.getItem(keyParam);
        if (storage) {
            const bytes = CryptoJS.AES.decrypt(storage, ConfigService.Config.Password);
            return JSON.parse(bytes.toString(CryptoJS.enc.Utf8) || null);
        } else {
            return null;
        }
    }

    removeSessionStorage(keyParam: string) {
        sessionStorage.removeItem(keyParam);
    }
        
    setPendency(isPendency) {
        sessionStorage.setItem(ConfigService.Storage.Pendency, CryptoJS.AES.encrypt(JSON.stringify(isPendency), ConfigService.Config.Password));
    }

    getPendency(): boolean {
        const bytes = CryptoJS.AES.decrypt(sessionStorage.getItem(ConfigService.Storage.Pendency).toString(), ConfigService.Config.Password);
        return bytes.toString(CryptoJS.enc.Utf8);
    }

    // public getUserRoles(): Observable<any> {
    // 	const roles: any = localStorage.getItem('userRoles');
    // 	try {
    // 		return of(JSON.parse(roles));
    // 	} catch (e) { }
    // }

    // public setUserRoles(roles: any): any {
    // 	if (roles != null) {
    // 		localStorage.setItem('userRoles', JSON.stringify(roles));
    // 	}

    // 	return this;
    // }

}
