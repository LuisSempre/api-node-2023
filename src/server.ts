import fastify from 'fastify'
import crypto from 'node:crypto'
import { knex } from './database'

const app = fastify()

app.get('/hi', async () => {
  const file = await knex('files').insert({
    id: crypto.randomUUID(),
    title: 'Files test',
    amount: 1000,
  })

  return file
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HI')
  })
