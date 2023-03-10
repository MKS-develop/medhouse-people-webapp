import { IUser } from './../../../../lib/domain/core/entities/userEntity';
import { AccountFailure } from './../../../../lib/domain/core/failures/account/accountFailure';

export interface IAccountState {
  updateAccount: IUpdateAccountState;
  getAccount: IGetAccountState;
}

interface IUpdateAccountState {
  data: string | null;
  loading: boolean;
  successful: boolean;
  error: AccountFailure | null; 
}

interface IGetAccountState {
  data: IUser | null;
  loading: boolean;
  successful: boolean;
  error: AccountFailure | null; 
}

export const initialState: IAccountState = {
  updateAccount: {
    data: null,
    loading: false,
    successful: false,
    error: null,
  },
  getAccount: {
    data: null,
    loading: false,
    successful: false,
    error: null,
  }
}