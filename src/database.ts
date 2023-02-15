import { knex as setupKnex } from 'knex'

export const knex = setupKnex({
  client: 'sqlite3',
  connection: {
    filename: './app.db',
  },
  useNullAsDefault: true,
})
