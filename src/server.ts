import fastify from 'fastify'
import { knex } from './database'

const app = fastify()

app.get('/hi', async () => {
  const tables = await knex.from('sqlite_schema').select('*')

  return tables
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HI')
  })
