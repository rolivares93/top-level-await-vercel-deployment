import { expressMiddleware } from '@apollo/server/express4'
import cors from 'cors'
import express from 'express'
import { server } from './apollo/server.js'
// import { sequelize } from './database/connection.js'

const app = express()
const port = process.env.APP_PORT || 4321

await server.start()
// await sequelize.sync()

app.use(cors())

app.get('/', (req, res) => res.send({ port }))

app.use(
  '/graphql',
  express.json(),
  expressMiddleware(server, {
    context: async ({ req, res }) => ({ req, res }),
  })
)

app.listen(port)
