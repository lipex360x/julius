import AppError from '@shared/errors/AppError'
import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'

interface TokenPayload {
  user_id: string,
  iat: number
  exp: number
}

export default function authMiddleware (request:Request, response:Response, next:NextFunction): void {
  const tokenHeader = request.headers.authorization

  if (!tokenHeader) throw new AppError('JWT token is missing', 401)

  const [, token] = tokenHeader.split(' ')

  try {
    const decoded = verify(token, process.env.JWT_SECRET)

    console.log(decoded)

    const { user_id } = decoded as TokenPayload

    request.user_id = user_id

    return next()
  } catch {
    throw new AppError('Invalid JWT Token')
  }
}
