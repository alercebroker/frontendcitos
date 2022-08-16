import qs from 'qs'
export function serializeParams(params: any) {
  return qs.stringify(params, {
    arrayFormat: 'repeat',
    skipNulls: true,
    filter: (_, value) => {
      if (value === '') {
        return
      }
      if (value === -999) {
        return
      }
      return value
    },
  })
}
