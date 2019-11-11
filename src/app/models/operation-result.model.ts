export class OperationResult {
  constructor(
    readonly success: boolean,
    readonly errors: string[],
  ) {
  }
}
