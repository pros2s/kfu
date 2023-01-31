export interface User {
  id: string;
  token?: string;
  email?: string;
  phoneNumber?: string;
}

export interface UserSchema {
  authData?: User;
  _inited: boolean;
}
