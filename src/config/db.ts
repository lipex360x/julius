import { createConnection } from 'typeorm'

const connectDB = async () => {
  try {
    const connect = await createConnection()

    console.log(`🔥 Connected to BD ${connect.options.database}`)

    process.on('SIGINT', ()=> {
      connect.close().then(() => console.log(`  💔 Disconnected to BD ${connect.options.database}`))
    })
  } catch (error) {
    console.log("###########",error.message)
  }
  
}

export default connectDB
