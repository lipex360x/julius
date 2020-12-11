import 'dotenv/config'

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

    migrations: ['./src/shared/infra/typeorm/migrations/*.{ts,js}'],

    entities: ['./src/modules/**/entities/*.{ts,js}'],
    factories: ['./src/shared/infra/typeorm/factories/*.{ts,js}'],
    seeds: ['./src/shared/infra/typeorm/seeds/*.{ts,js}'],

    cli: {
      migrationsDir: './src/shared/infra/typeorm/migrations'
    }
  }
]
