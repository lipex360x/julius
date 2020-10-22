  import { Router } from 'express';

  const routes = Router()

  import Usuario from './usuario.routes'

  routes.use('/usuario',Usuario)

  export default routes
  