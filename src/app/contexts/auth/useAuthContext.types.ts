import { IUser } from '@/shared/types';

export type ITokenType = {
  exp: number;
};

export interface IUseAuthContext {
  userAuthenticated: IUser | null;
  expiresIn: number | null;
  handleSetUserAuth: (user: IUser, token: string) => void;
  handleLogout: () => void;
}
