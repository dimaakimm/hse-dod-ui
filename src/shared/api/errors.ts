export interface IError {
  ErrorID: string;
  Message: string;
}

export class DetailsError extends Error {
  details: object;

  constructor(message: string, details: object) {
    super(message);
    this.details = details;

    // eslint-disable-next-line no-console
    console.error(message, details);
    Object.setPrototypeOf(this, details);
  }
}
