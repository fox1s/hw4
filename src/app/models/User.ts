import {IAddress} from './Address';

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddress;
}
