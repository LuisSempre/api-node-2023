import fastify from "fastify";

const app = fastify()

app.get('/hi', () => {
  return 'Hi'
})

app.listen({
  port: 3333,
}).then(() => {
  console.log('HI')
})