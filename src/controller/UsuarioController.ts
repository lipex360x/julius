import { getManager } from "typeorm";
import { Usuario } from "../entity/Usuario";

interface ISaveProps{
  usuario: Usuario
}

interface IShowProps{
  id: string
}

interface IGetLancamentosProps{
  id: string
}

export class UsuarioController {
  async index(): Promise<Usuario[]> {
    const result = await getManager().find(Usuario)
    return result
  }

  async show({id}:IShowProps): Promise<Usuario> { 
    const getUsuario = await getManager().findOne(Usuario, id)
    return getUsuario
  }

  async save({usuario}:ISaveProps): Promise<Usuario> {
    const result = await getManager().save(usuario)
    return result
  }

  async getLancamentos({id}:IGetLancamentosProps): Promise<Usuario> {
    const usuario = await getManager().findOne(Usuario, id, {
      relations: ['lancamentos']
    })
    
    return usuario
  }
}