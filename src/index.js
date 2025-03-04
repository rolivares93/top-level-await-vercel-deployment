import { expressMiddleware } from '@apollo/server/express4'
import cors from 'cors'
import express from 'express'
import { server } from './apollo/server.js'

const app = express()

await server.start()

app.use(cors())

app.use(
  '/graphql',
  express.json(),
  expressMiddleware(server, {
    context: async ({ req, res }) => ({ req, res }),
  })
)

app.listen(4001)
