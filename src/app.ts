import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

import connectDB from './config/db'
import routes from './routes'

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)
app.use(morgan('dev'))

connectDB()

export default app