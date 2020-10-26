import { createConnection } from 'typeorm'

const connectDB = async () => {
  try {
    const connect = await createConnection({
      type:"postgres",
      
      //docker-compose db service
      host:process.env.ORM_HOST,

      username: process.env.ORM_USER,
      password: process.env.ORM_PASS,
      database: process.env.ORM_DATABASE,

      logging: false,

      entities: [__dirname+"../entity/**/*.ts"],
      migrations: ["../migration/**/*.ts"]
    })
    console.log(`🔥 Connected to BD ${connect.options.database} ${__dirname}"../entity/*.ts"`)

    process.on('SIGINT', ()=> {
      connect.close().then(() => console.log(`  💔 Disconnected to BD ${connect.options.database}`))
    })
  } catch (error) {
    console.log("###########",error.message)
  }
  
}

export default connectDB
