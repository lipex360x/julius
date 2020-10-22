import { Router } from 'express'
import { UsuarioController } from '../controller/UsuarioController'
import { Usuario } from '../entity/Usuario'

const router = Router()

const usuarioController = new UsuarioController()

router.post('/', async (request, response) => {
  const { nome, email } = request.body
  const usuario = new Usuario(nome,email)
  const setUsuario = await usuarioController.save({usuario})
  
  response.json(setUsuario)
})

router.get('/', async(request, response) => {
  const usuarios = await usuarioController.index()
  response.json(usuarios)
})

router.get('/lancamentos/:idUsuario', async (request, response) => {
  const { idUsuario } = request.params
  const getLancamentos = await usuarioController.getLancamentos({id: idUsuario})

  return response.json(getLancamentos)
})
export default router