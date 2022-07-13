/**
 * Parse error class
 */
export class ParseError extends Error {
  constructor(m: string) {
    super(m)

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, ParseError.prototype)
  }
}

/**
 * Identifies if object is instance of ParseError
 * @param e - error instance
 */
export const isParseError = (e: Error): boolean => {
  return e instanceof ParseError
}
