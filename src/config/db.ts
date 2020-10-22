import { createConnection } from 'typeorm'

const connectDB = async () => {
  const connect = await createConnection()

  console.log(`🔥 Connected to BD ${connect.options.database}`)

  process.on('SIGINT', ()=> {
    connect.close().then(() => console.log(`  💔 Disconnected to BD ${connect.options.database}`))
  })
}

export default connectDB
