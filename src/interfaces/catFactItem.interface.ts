import { User } from "./user.interface";

export interface CatFactItemInterface {
  fact: string;
  user: User;
  loadingUser: boolean;
}
