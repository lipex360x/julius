import app from './app'

const server = app.listen(3000, () => console.log(`🚀 App Started at Port 3000`))

process.on('SIGINT', () => {
  server.close()
  console.log(`🔒 App Stopped`)
})