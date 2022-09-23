import { Parser } from '../../../types'

export const b64Parser: Parser<Blob, Promise<string>> = {
  parseTo: async (response) => {
    return new Promise((resolve, _) => {
      const reader = new FileReader()
      reader.onloadend = () => resolve(reader.result.toString())
      reader.readAsDataURL(response)
    })
  },
}
