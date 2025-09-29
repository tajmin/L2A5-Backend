import { Types } from "mongoose";

export enum ROLE {
  ADMIN = "ADMIN",
  RIDER = "RIDER",
  DRIVER = "DRIVER",
}

// export enum STATUS {
//     ONLINE = "ONLINE",
//     OFFLINE = "OFFLINE",
//     BUSY = "BUSY"
// }

// export interface IAuthProvider {
//   provider: string; // "Google", "Credential"
//   providerId: string;
// }

export enum IsActive {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  BLOCKED = "BLOCKED",
}

export interface IUser {
  name: string;
  email: string;
  password: string;
  phone?: string;
  picture?: string;
  address?: string;
  isDeleted?: boolean;
  isActive?: IsActive;
  isVerified?: boolean;
  role: ROLE;
  //   auths: IAuthProvider[];
  trips?: Types.ObjectId[];
  //   guides?: Types.ObjectId[];
}
