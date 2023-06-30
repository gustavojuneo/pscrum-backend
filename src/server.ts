import fastify from 'fastify'

const app = fastify()

app.get('/users', () => {})

app
  .listen({
    host: '0.0.0.0',
    port: process.env.PORT ? Number(process.env.PORT) : 3333,
  })
  .then(() => {
    console.log('HTTP Server running')
  })
