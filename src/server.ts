import fastify from 'fastify'
import crypto from 'node:crypto'
import { env } from './env'
import { knex } from './database'

const app = fastify()

app.get('/hi', async () => {
  const file = await knex('files')
    .insert({
      id: crypto.randomUUID(),
      title: 'Files test',
      amount: 1000,
    })
    .returning('*')

  return file
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HI')
  })
