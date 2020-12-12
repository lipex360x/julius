import { container } from 'tsyringe'

import IUsuarioRepository from './interfaces/IUsuarioRepository'
import UsuarioRepository from '@modules/usuario/infra/typeorm/repositories/UsuarioRepository'

const providers = {
  usuarioPostgres: UsuarioRepository
}

container.registerSingleton<IUsuarioRepository>(
  'UsuarioRepository',
  providers.usuarioPostgres
)
