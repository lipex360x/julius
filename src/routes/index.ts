  import { Router } from 'express';

  const routes = Router()

  import Usuario from './usuario.routes'
  import Lancamentos from './lancamento.routes'

  routes.use('/usuario',Usuario)
  routes.use('/lancamento', Lancamentos)

  export default routes
  