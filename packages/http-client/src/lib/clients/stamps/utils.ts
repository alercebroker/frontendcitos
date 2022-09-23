import { Parser } from '../../../types'
import { Buffer, Blob } from 'buffer'

export const b64Parser: Parser<Blob, Promise<string>> = {
  parseTo: async (response) => {
    const buffer = Buffer.from(await response.arrayBuffer())
    return 'data:' + response.type + ';base64,' + buffer.toString('base64')
  },
}
