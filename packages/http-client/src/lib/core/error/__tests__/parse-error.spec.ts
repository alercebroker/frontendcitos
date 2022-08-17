import { isParseError, ParseError } from '../parse-error'

describe('ParseError', () => {
  describe('Constructor', () => {
    test('Correctly creates a parse error', () => {
      const err = new ParseError('failed to parse')
      expect(err).toBeInstanceOf(ParseError)
    })
  })
  describe('isParseError', () => {
    test('Correctly identifies parse errors', () => {
      let err = new ParseError('failed to parse')
      expect(isParseError(err)).toBeTruthy()
      err = new Error('Some other error')
      expect(isParseError(err)).toBeFalsy()
    })
  })
})
