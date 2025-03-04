import { expressMiddleware } from '@apollo/server/express4'
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import { server } from './apollo/server.js'

dotenv.config()

const app = express()
const port = process.env.APP_PORT || 4002

await server.start()

app.use(cors())

app.use('/', (req, res) => res.send({ port }))

app.use(
  '/graphql',
  express.json(),
  expressMiddleware(server, {
    context: async ({ req, res }) => ({ req, res }),
  })
)

app.listen(port)
