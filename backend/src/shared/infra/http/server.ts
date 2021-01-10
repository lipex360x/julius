import app from './app'

const server = app.listen(3333, () => console.log('🚀 API JULIUS Started on Port 3333'))

process.on('SIGINT', () => {
  server.close()
  console.log('🔒 API Stopped')
  process.exit()
})
