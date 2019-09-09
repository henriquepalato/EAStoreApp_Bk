import { BaseModel } from '../base.model';

export class UserLog extends BaseModel {
  static fromJson(jsonData: any): UserLog {
    return Object.assign(new UserLog(), jsonData);
  }

  constructor(
    public UsuarioLogId?: string,
    public UsuarioId?: string,
    public User?: string,
    public DataLogin?: Date,
  ) {
    super();
  }
}
