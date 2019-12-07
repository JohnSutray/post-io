export class CreateUser {
  constructor(
    readonly login: string,
    readonly password: string,
    readonly firstName: string,
    readonly lastName: string,
    readonly birthDate: Date,
  ) {
  }
}
