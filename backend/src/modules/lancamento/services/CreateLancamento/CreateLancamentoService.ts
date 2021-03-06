import AppError from '@shared/errors/AppError'

import { inject, injectable } from 'tsyringe'

import Lancamento from '@modules/lancamento/infra/typeorm/entities/Lancamento'
import ILancamentoRepository from '@modules/lancamento/repositories/interfaces/ILancamentoRepository'
import IUsuarioRepository from '@modules/usuario/repositories/interfaces/IUsuarioRepository'

interface Request{
  usuario_id: string
  description: string
  date: string
  value: number
}

@injectable()
export default class CreateLancamentoService {
  constructor (
    @inject('LancamentoRepository')
    private repository: ILancamentoRepository,

    @inject('UsuarioRepository')
    private usuarioRepository: IUsuarioRepository
  ) {}

  async execute ({ usuario_id, description, value, date }: Request): Promise<Lancamento> {
    const getUsuario = await this.usuarioRepository.findById({ usuario_id })

    if (!getUsuario) throw new AppError('This user does not exists')

    const lancamento = await this.repository.create({ usuario_id, description, value, date })

    return lancamento
  }
}
