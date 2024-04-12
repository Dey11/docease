export interface IUser {
  name: string;
  email: string;
  password: string;
  isAdmin?: boolean;
  createdAt?: Date;
  profilePic?: string;
}
