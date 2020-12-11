import { container } from 'tsyringe'

import IStorageProvider from './interfaces/IStorageProvider'

import DiskStorageProvider from './implementations/LocalStorage'

const providers = {
  disk: DiskStorageProvider
}

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  providers.disk
)
