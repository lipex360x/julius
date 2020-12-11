import IStorageProvider, { DeleteFileProps, SaveFileProps } from '../interfaces/IStorageProvider'

export default class FakeStorageFiles implements IStorageProvider {
  private storage:string[] = []

  async saveFile ({ file }:SaveFileProps): Promise<string> {
    this.storage.push(file)

    return file
  };

  async deleteFile ({ file }:DeleteFileProps): Promise<void> {
    const findIndex = this.storage.findIndex(storageFile => storageFile === file)

    this.storage.splice(findIndex, 1)
  };
}
