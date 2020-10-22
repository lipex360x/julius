import { getManager } from "typeorm";
import { Usuario } from "../entity/Usuario";

interface IUsuarioController{
  usuario: Usuario
}

export class UsuarioController {
  async save({usuario}:IUsuarioController) {
    const result = await getManager().save(usuario)
    return result
  }

  async index() {
    const result = await getManager().find(Usuario)
    return result
  }
}