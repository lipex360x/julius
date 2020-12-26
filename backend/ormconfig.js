require('dotenv').config()

const dir = process.env.NODE_DIST === 'dev' ? 'src' : 'dist'

module.exports = [
  {
    name: 'default',
    type: 'postgres',

    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASS,
    database: process.env.POSTGRES_DB,

    logging: false,

    migrations: [`./${dir}/shared/infra/typeorm/migrations/*.{ts,js}`],

    entities: [`./${dir}/modules/**/entities/*.{ts,js}`],
    factories: [`./${dir}/shared/infra/typeorm/factories/*.{ts,js}`],
    seeds: [`./${dir}/shared/infra/typeorm/seeds/*.{ts,js}`],

    cli: {
      migrationsDir: `./${dir}/shared/infra/typeorm/migrations`
    }
  }
]
