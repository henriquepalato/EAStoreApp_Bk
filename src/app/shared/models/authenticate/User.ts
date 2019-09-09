import { BaseModel } from '../base.model';

export class User extends BaseModel {
    static fromJson(jsonData: any): User {
        const object = Object.assign(new User(), jsonData);
        object.id = object.UsuarioId;
        object.name = object.Nome;
        return object;
    }

    constructor(
        public UsuarioId?: string,
        public Nome?: string,
        public PerfilId?: string,
        public Email?: string,
        public Ativo?: boolean,
        public Senha?: string,
        public Perfil?: number,
        public DataAlteracao?: string,
        public MailCadastro?: boolean,
        public UsuarioAlteracao?: string,
        public MailIOA?: boolean,
        public MailFinancas?: boolean,
        public LogIn?: string,
        public UserName?: string,
        public Password?: string,
        public Hits?: number,
        public ChangePassword?: boolean,
        public LastAccess?: Date,
        public Imagem?: string,
        public ImagemSize?: string, // * não tem no banco
        public AccessGroupId?: number,
        public PrestadorId?: number,

        // Não tem no Banco
        public remember?: boolean,
        public password2?: string,
        public agree?: boolean,

        public MutuarioId?: string, // * não tem no banco
        public Cpf?: string, // * não tem no banco

        public Name?: string
    ) {
        super();
    }
}
