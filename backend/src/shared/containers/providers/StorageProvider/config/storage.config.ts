import multer from 'multer'
import path from 'path'
import crypt from 'crypto'

const tmpFolder = path.resolve(__dirname, '..', 'tmp')
export default {
  tmpFolder,
  uploadFolder: path.resolve(tmpFolder, 'uploads'),

  storage: multer.diskStorage({
    destination: tmpFolder,
    filename (request, file, callback) {
      const ext = /^.+\.([^.]+)$/.exec(file.originalname)
      let [name] = file.originalname.split(`.${ext[1]}`)

      name = name
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/([^\w]+|\s+)/g, '-')
        .replace(/\-\-+/g, '-')
        .replace(/(^-+|-+$)/, '')
        .toLowerCase()

      const fileText = `${name}.${ext[1]}`

      const fileHash = crypt.randomBytes(10).toString('hex')
      const fileName = `${fileHash}-${fileText}`

      return callback(null, fileName)
    }
  })
}
