export class LogHttpError {
    LogHttpErrorId: string;
    UsuarioId: string;
    ServiceName: string;

    ErrorStatus: number;
    Message: string;
    Notifications: Notifications[];
    Notification: string;
    Error;
    Errors: string;
    LoginError: string;
    // Errors: any;
    ErrorDescription: string;
    DateError: Date;
}

export class Notifications {
    Message: string;
    Property: string;
    error: string;
    error_description: string;
}
