import { EUserRole } from '../enums/user-role.enum';

export class User {
  constructor(
    readonly firstName: string,
    readonly lastName: string,
    readonly birthDate: string,
    readonly role: EUserRole,
  ) {}
}
