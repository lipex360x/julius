import { createConnections, Connection } from 'typeorm'
let count = 0

async function connectDB () {
  const retry = true

  try {
    const connection: Connection[] = await createConnections()
    console.log('Conectou')
    return connection
  } catch (error) {
    console.error('count:', count)
    const t = setInterval(() => {
      console.log('Tentando Conectar')
      if (retry) {
        connectDB()
      }
      clearTimeout(t)
    }, 2000)

    count++
  }
}

export default connectDB()
