import fs from 'fs'
import path from 'path'

import storageConfig from '../config/storage.config'
import IStorageProvider, { DeleteFileProps, SaveFileProps } from '../interfaces/IStorageProvider'

export default class LocalStorage implements IStorageProvider {
  async saveFile ({ file }:SaveFileProps): Promise<string> {
    await fs.promises.rename(
      path.resolve(storageConfig.tmpFolder, file),
      path.resolve(storageConfig.uploadFolder, file)
    )
    return file
  };

  async deleteFile ({ file }:DeleteFileProps): Promise<void> {
    const filePath = path.resolve(storageConfig.uploadFolder, file)

    try {
      await fs.promises.stat(filePath)
    } catch {
      return
    }

    await fs.promises.unlink(filePath)
  };
}
