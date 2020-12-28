import { createConnections } from 'typeorm'
import promiseRetry from '@shared/utils/PromiseRetry'

class OrmConnect {
  public async execute () {
    try {
      const connect = await createConnections()
      console.log(`💖 Connected to ${connect[0].options.database}`)

      process.on('SIGINT', () => {
        connect[0].close().then(() => console.log(`  💔 Disconnected to ${connect[0].options.database}`))
      })
    } catch (error) {
      await promiseRetry.execute({
        timeInSeconds: 2,
        attemptLimit: 10,
        message: 'Trying to connect to database',
        functionRetry: () => { return this.execute() }
      })
    }
  }
}

export default new OrmConnect().execute()
