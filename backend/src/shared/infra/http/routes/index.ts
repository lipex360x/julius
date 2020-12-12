import { Router } from 'express'

import usuarioRouter from '@modules/usuario/infra/http/routes/usuario.routes'
import lancamentoRouter from '@modules/lancamento/infra/http/routes/lancamento.routes'

const routes = Router()

routes.use('/usuarios', usuarioRouter)
routes.use('/lancamentos', lancamentoRouter)

export default routes
