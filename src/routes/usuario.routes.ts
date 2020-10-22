import { Router } from 'express'

const router = Router()

router.get('/', (request, response) => {
  return response.send('User Service')
})

export default router