export type Newable<T> = { new (...args: unknown[]): T }

export type PaginatedListEntity<T> = {
  total: number
  page: number
  next: number
  hasNext: boolean
  prev: number
  hasPrev: boolean
  items: T[]
}
