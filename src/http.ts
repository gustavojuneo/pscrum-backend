import fastify from 'fastify'
import fastifyIO from 'fastify-socket.io'
import cors from '@fastify/cors'

const server = fastify()
server.register(cors, {
  origin: ['http://localhost:3000', 'https://pscrum.vercel.app'],
})
server.register(fastifyIO, {
  cors: {
    origin: ['http://localhost:3000', 'https://pscrum.vercel.app'],
  },
})

export { server }
