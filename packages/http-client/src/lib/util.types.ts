export type Newable<T> = { new (...args: unknown[]): T }

export type PaginatedListEntity<T> = {
  total: number | null
  page: number
  next: number | null
  hasNext: boolean
  prev: number | null
  hasPrev: boolean
  items: T[]
}
