export interface SetCacheProps {
  key: string
  value: any
}

export interface GetCacheProps {
  key: string
}

export interface DelCacheProps {
  key: string
}

export interface DeletePrefixProps {
  key: string
}

export default interface ICacheProvider {
  setCache(data: SetCacheProps): Promise<void>
  getCache<T>(data: GetCacheProps): Promise<T>
  delCache(data: DelCacheProps): Promise<void>
  deletePrefix(data: DeletePrefixProps): Promise<void>
}
