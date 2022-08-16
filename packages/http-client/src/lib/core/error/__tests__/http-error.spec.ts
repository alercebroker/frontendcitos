import { HttpError, isHttpError } from '../http-error'

describe('HttpError', () => {
  describe('isClientError()', () => {
    test('correctly identify clientError', () => {
      let err = new HttpError(400)
      expect(err.isClientError()).toBeTruthy()
      err = new HttpError(451)
      expect(err.isClientError()).toBeTruthy()
      err = new HttpError(308)
      expect(err.isClientError()).toBeFalsy()
      err = new HttpError(500)
      expect(err.isClientError()).toBeFalsy()
    })
  })
  describe('isServerError', () => {
    test('correctly identify serverError', () => {
      let err = new HttpError(500)
      expect(err.isServerError()).toBeTruthy()
      err = new HttpError(511)
      expect(err.isServerError()).toBeTruthy()
      err = new HttpError(451)
      expect(err.isServerError()).toBeFalsy()
    })
  })
  describe('Border Cases', () => {
    test('fail if status is negative', () => {
      expect(() => new HttpError(-1)).toThrow(
        'Status code not valid for HttpError'
      )
    })
    test('fail if status code is unknown', () => {
      expect(() => new HttpError(600)).toThrow(
        'Status code not valid for HttpError'
      )
    })
  })
  describe('Factory fromStatus', () => {
    test('Correctly creates object using factory method', () => {
      const err = HttpError.fromStatus(500)
      expect(err.status).toBe(500)
    })
  })
  describe('isHttpError', () => {
    test('Correctly identifies http error', () => {
      const err = HttpError.fromStatus(500)
      expect(isHttpError(err)).toBeTruthy()
      expect(isHttpError(new Error('Some other error'))).toBeFalsy()
    })
  })
})
