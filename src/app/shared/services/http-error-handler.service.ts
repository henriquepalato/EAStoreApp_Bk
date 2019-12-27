// import { Injectable } from '@angular/core';
// import { HttpErrorResponse } from '@angular/common/http';
// import { Observable, of } from 'rxjs';
// // Models
// import { LogHttpError } from 'src/app/shared/models/logs/LogHttpError';
// // Service
// // import { LogHttpErrorService } from 'src/app/shared/services/logs/log-httperror.service';

// import swal from 'sweetalert2';
// import { Router } from '@angular/router';
// export type HandleError = <T> (operation?: string, result?: T) => (error: HttpErrorResponse) => Observable<T>;

// @Injectable({ providedIn: 'root' })

// export class HttpErrorHandler {
//   constructor(
//     private router: Router
//     // private logHttpErrorService: LogHttpErrorService
//   ) {
//   }

//   createHandleError = (serviceName = '') => <T>
//     (operation = 'operation', result = {} as T) => this.handleError(serviceName, operation, result);

//   handleError<T>(serviceName = '', operation = 'operation', result = {} as T) {
//     return (error: HttpErrorResponse): Observable<T> => {
//       console.error(error); // log to console instead
//       debugger
//       const logHttpError = new LogHttpError();
//       logHttpError.ErrorStatus = error.status;
//       logHttpError.ServiceName = serviceName;
//       logHttpError.Message = error.message;
//       logHttpError.Notifications = error.error;
//       logHttpError.Error = error.error;
//       logHttpError.LoginError = error.error.error;
//       logHttpError.ErrorDescription = error.error.error_description;

//       console.log(logHttpError);
//       if (logHttpError.Error.size) {
//         var url = window.URL.createObjectURL(logHttpError.Error);
//         window.open(url);
//       }

//       if (error.status === 401) {
//         // swal({
//         //     title: '<strong>Autorização foi negada para este pedido.</strong>',
//         //     type: 'error',
//         //     html: 'Se você está logado há mais de 1 dia no sistema, você deverá fazer o <a href="/auth/login">Login</a> ' +
//         //         'novamente.</br> ' +
//         //         'Caso o erro persista, verifique com um administrador do sistema se você tem a autorização para este pedido.</br>' +
//         //         'Erro: ' + error.message,
//         //     confirmButtonText: 'Ok',
//         // }).then((result) => {
//         //     if (result.value) {
//         //         this.router.navigate(['/auth/login']);
//         //     }
//         // });
//         // this.logHttpErrorService.create(logHttpError).subscribe();
//         return of(result);
//       }

//       // Login
//       if (serviceName === 'login') {
//         let message = '';
//         if (logHttpError.ErrorDescription) {
//           message = logHttpError.ErrorDescription;
//           // this.authNoticeService.setNotice(message, 'error');
//           // this.logHttpErrorService.CreateLogin(logHttpError).subscribe();
//           return of(result);
//         }
//         if (logHttpError.LoginError) {
//           message = logHttpError.LoginError;
//           // this.authNoticeService.setNotice(message, 'error');
//           // this.logHttpErrorService.CreateLogin(logHttpError).subscribe();
//           return of(result);
//         }
//         if (logHttpError.Error) {
//           message = logHttpError.Error;
//           // this.authNoticeService.setNotice(message, 'error');
//           // this.logHttpErrorService.CreateLogin(logHttpError).subscribe();
//           return of(result);
//         }
//         if (logHttpError.ErrorStatus === 400 && logHttpError.Error.length && logHttpError.Notifications.length) {
//           logHttpError.Notifications.forEach(obj => {
//             if (obj.Message) {
//               const str1 = obj.Message;
//               message = message + str1;
//             }
//             if (obj.error_description) {
//               const str1 = obj.Message;
//               message = message + str1;
//             }
//           });
//           // this.logHttpErrorService.CreateLogin(logHttpError).subscribe();
//           // this.authNoticeService.setNotice(message, 'error');
//           return of(result);
//         }
//       } else {

//         // this.logHttpErrorService.create(logHttpError).subscribe();
//         let message = '';
//         if (serviceName) {
//           message = message + '<b>Serviço: </b>' + serviceName + '</br>';
//         }
//         if (logHttpError.ErrorStatus === 400 && logHttpError.Notifications.length) {
//           if (logHttpError.ErrorStatus === 400 && logHttpError.Notifications.forEach) {
//             logHttpError.Notifications.forEach(obj => {
//               const str1 = '<b>Mensagem do Erro: </b>' + obj.Message + '</br><b>Ação: </b>' + obj.Property + '</br>';
//               message = message + str1;
//             });
//           } else {
//             const str1 = '<b>Mensagem do Erro: </b>' + logHttpError.Notifications + '</br>';
//             message = message + str1;
//           }
//         }
//         if (logHttpError.Error.Errors) {
//           message = message + '<b>Mensagem do Erro: </b>' + logHttpError.Error.Errors + '</br>';
//         }
//         if (error.error.Message) {
//           message = message + '<b>Mensagem do Erro: </b>' + error.error.Message + '</br>';
//         }
//         if (error.message) {
//           message = message + '<b>Server Erro: </b>' + error.message + '</br>';
//         }

//         swal.fire({
//           title: '<strong>Mensagem de erro!</strong>',
//           type: 'error',
//           html: message
//         });
//         return of(result);
//       }

//       // this.logHttpErrorService.create(logHttpError).subscribe();
//       // Deixe o aplicativo continuar executando retornando um resultado seguro.
//       return of(result);
//     };
//   }
// }
