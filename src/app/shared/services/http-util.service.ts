// import { Injectable } from '@angular/core';
// import { HttpParams, HttpHeaders } from '@angular/common/http';

// import { ConfigService } from './config.service';
// import { StorageService } from './storage.service';

// @Injectable({
//     providedIn: 'root',
// })

// export class HttpUtilService {
//     private API_URL: string = ConfigService.Url.Url_Api;
//     private API_URL_SMS: string = ConfigService.Url.Url_Sms_Api;

//     constructor(private storageService: StorageService) {
//     }

//     url(path: string) {
//         return this.API_URL + path;
//     }

//     urlSMS(path: string) {
//         return this.API_URL_SMS + path;
//     }

//     getUploadAuthorization() {
//         const authToken = this.storageService.getToken();
//         if (authToken) {
//             return {
//                 headers: new HttpHeaders({ 'Authorization': `Bearer ${authToken}` })
//             };
//         }
//     }

//     getHTTPHeader() {
//         return {
//             headers: new HttpHeaders({ 'Content-Type': 'application/json' })
//         };
//     }

//     getHTTPHeaderAuthorization() {
//         const authToken = this.storageService.getToken();
//         if (authToken) {
//             return { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${authToken}` }) };
//         } else {
//             return { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
//         }
//     }

//     getHTTPReportHeaderAuthorization() {
//         const authToken = this.storageService.getToken();
//         if (authToken) {
//             const headers = new HttpHeaders({
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json', 'Authorization': `Bearer ${authToken}`
//             });
//             return { headers: headers, responseType: 'blob' as 'json' };
//         } else {
//             const headers = new HttpHeaders({
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json'
//             });
//             return { headers: headers, responseType: 'blob' as 'json' };
//         }
//     }

//     getFindHTTPParams(queryParams): HttpParams {
//         const params = new HttpParams()
//             .set('lastNamefilter', queryParams.filter)
//             .set('sortOrder', queryParams.sortOrder)
//             .set('sortField', queryParams.sortField)
//             .set('pageNumber', queryParams.pageNumber.toString())
//             .set('pageSize', queryParams.pageSize.toString());

//         return params;
//     }
// }
