  import { Router } from 'express';

  const routes = Router()

  import Usuario from './usuario.routes'

  routes.use('/', (request, response) => {
    return response.send('Hello World')
  })
  
  routes.use('/usuario',Usuario)

  export default routes
  