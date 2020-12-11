import { Router } from 'express'
import logger from '@shared/logger'

// import moduleRouter from '@modules/...'

const routes = Router()

routes.get('/', (request, response) => {
  logger.log('Hello Typescript')
  return response.send('Hello Typescript')
})

// routes.use('/route', moduleRouter)

export default routes
