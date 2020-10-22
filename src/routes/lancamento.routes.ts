import { Router } from 'express'
import { LancamentoController } from '../controller/LancamentoController'
import { UsuarioController } from '../controller/UsuarioController'
import { Lancamento } from '../entity/Lancamento'

const usuarioController = new UsuarioController()
const lancamentoController = new LancamentoController()


const router = Router()

router.post('/', async(request, response) => {
  const { idUsuario, valor, descricao, data } = request.body
  const getUsuario = await usuarioController.show({id: idUsuario})

  if(!getUsuario) {
    return response.status(404).json({message: 'Usuario não encontrado'})
  } 

  const lancamento = new Lancamento(valor, descricao, data, getUsuario)
  const newLancamento = await lancamentoController.save({lancamento})
  response.json(newLancamento)
  
})

export default router


