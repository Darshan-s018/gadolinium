import type { Prisma } from "@prisma/client";

export type User = Prisma.UserCreateInput; // Replace with the correct type exported by Prisma, such as `Prisma.UserCreateInput` or another appropriate type.

export enum SignUpWithUsernameAndPasswordError {
  CONFLICTING_USERNAME = "CONFLICTING_USERNAME",
  UNKNOWN = "UNKNOWN",
}

export type SignUpWithUsernameAndPasswordResult = {
  token: string;
  user: User;
};