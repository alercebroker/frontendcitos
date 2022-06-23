export class ParseError extends Error {
  constructor(m: string) {
    super(m)

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, ParseError.prototype)
  }
}

export const isParseError = (e: Error): e is ParseError => {
  return e instanceof ParseError
}
