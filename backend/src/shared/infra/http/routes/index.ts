import { Router } from 'express'

import usuarioRouter from '@modules/usuario/infra/http/routes/usuario.routes'

const routes = Router()

routes.use('/usuario', usuarioRouter)

export default routes
