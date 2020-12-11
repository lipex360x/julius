import app from './app'

const server = app.listen(3333, () => console.log('🚀 API Started at Port 3333'))

process.on('SIGINT', () => {
  server.close()
  console.log('🔒 API Stopped')
})
