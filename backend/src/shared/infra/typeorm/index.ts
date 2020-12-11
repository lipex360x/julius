import { createConnections } from 'typeorm'

const connectDB = async () => {
  try {
    const connect = await createConnections()

    console.log(`💖 Connected to ${connect[0].options.database}`)

    process.on('SIGINT', () => {
      connect[0].close().then(() => console.log(`  💔 Disconnected to ${connect[0].options.database}`))
    })
  } catch (error) {
    console.log('Database Error: ', error.message)
  }
}

export default connectDB
