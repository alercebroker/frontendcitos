import { serializeParams } from '../utils'

describe('Clean query string', () => {
  it('should repeat array values', () => {
    let params = {
      aid: ['aid1', 'aid2'],
    }
    const serializedParams = serializeParams(params)
    expect(serializedParams).toStrictEqual('aid=aid1&aid=aid2')
  })
  it('should skip null values', () => {
    let params = {
      aid: null,
    }
    const serializedParams = serializeParams(params)
    expect(serializedParams).toStrictEqual('')
  })
  it('should filter empty string values', () => {
    let params = {
      aid: '',
    }
    const serializedParams = serializeParams(params)
    expect(serializedParams).toStrictEqual('')
  })
  it('should filter default unset values', () => {
    let params = {
      firstmjd: [-999, 123],
    }
    const serializedParams = serializeParams(params)
    expect(serializedParams).toStrictEqual('firstmjd=123')
  })
})
