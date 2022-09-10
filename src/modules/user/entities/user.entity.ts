import { Prisma, Role } from '@prisma/client';

export class User implements Prisma.UserUncheckedCreateInput {
  id?: string;

  role?: Role;

  email: string;

  password: string;

  name?: string;

  address?: string;

  createdAt?: string | Date;

  updatedAt?: string | Date;
}
