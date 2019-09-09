import { Injectable } from '@angular/core';
import { ConfigService } from './../services/config.service';
import { StorageService } from './storage.service';

@Injectable({
    providedIn: 'root',
})

export class SessionService {
    constructor(private storageService: StorageService) {
    }

    getSession() {
        return JSON.parse(this.storageService.getSessionStorage(ConfigService.Storage.Session));
    }

    getMutuario() {
        return JSON.parse(this.storageService.getSessionStorage(ConfigService.Storage.Mutuario));
    }

    isDeveloper(): boolean {
        if (JSON.parse(this.storageService.getSessionStorage(ConfigService.Storage.Session)).AccessGroupId === 1) {
            return true;
        }
        return false;
    }

    isAdministrador(): boolean {
        if (JSON.parse(this.storageService.getSessionStorage(ConfigService.Storage.Session)).AccessGroupId === 1 ||
            JSON.parse(this.storageService.getSessionStorage(ConfigService.Storage.Session)).AccessGroupId === 2) {
            return true;
        }
        return false;
    }

    isAdministradorUCB(): boolean {
        if (JSON.parse(this.storageService.getSessionStorage(ConfigService.Storage.Session)).AccessGroupId === 1 ||
            JSON.parse(this.storageService.getSessionStorage(ConfigService.Storage.Session)).AccessGroupId === 2 ||
            JSON.parse(this.storageService.getSessionStorage(ConfigService.Storage.Session)).AccessGroupId === 3) {
            return true;
        }
        return false;
    }

    isMutuario(): boolean {
        if (JSON.parse(this.storageService.getSessionStorage(ConfigService.Storage.Session)).AccessGroupId === 10) {
            return true;
        }
        return false;
    }

    lowAccess(): boolean {
        if (JSON.parse(this.storageService.getSessionStorage(ConfigService.Storage.Session)).AccessLevelId === 3) {
            return true;
        }
        return false;
    }
}
