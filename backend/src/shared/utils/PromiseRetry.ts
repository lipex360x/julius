interface RetryProps {
  attemptLimit:number | 'Infinity',
  timeInSeconds: number,
  message:string,
  functionRetry: any
}

class PromiseRetry {
  private count: number

  constructor () {
    this.count = 0
  }

  public async execute ({ attemptLimit, timeInSeconds, message, functionRetry }:RetryProps): Promise<void> {
    const time = timeInSeconds * 1000

    const interval = setInterval(async () => {
      console.log(`⚔ ${message} - attempt ${this.count} of ${attemptLimit}`)

      if (attemptLimit !== 'Infinity' && this.count >= attemptLimit) {
        console.log('☠ Maximum attempts reached')
        process.exit()
      }

      try {
        await functionRetry()
      } catch (error) {
        await this.execute({ attemptLimit, timeInSeconds, message, functionRetry })
      }

      clearTimeout(interval)
    }, time)

    this.count++
  }
}

export default new PromiseRetry()
