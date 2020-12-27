import { createConnections } from 'typeorm'
let count = 0
async function connectDB () {
  try {
    const connect = await createConnections()
    console.log(`💖 Connected to ${connect[0].options.database}`)

    process.on('SIGINT', () => {
      connect[0].close().then(() => console.log(`  💔 Disconnected to ${connect[0].options.database}`))
    })
  } catch (error) {
    if (count >= 5) {
      console.log('Maximum attempts reached ')
      process.exit()
    }
    const t = setInterval(() => {
      console.log('⚔ Trying connect to databases...')
      connectDB()
      clearTimeout(t)
    }, 2000)
    count++
  }
}

export default connectDB()
