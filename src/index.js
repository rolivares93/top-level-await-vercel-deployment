import { expressMiddleware } from '@apollo/server/express4'
import cors from 'cors'
import express from 'express'
import { server } from './apollo/server.js'

const app = express()

await server.start()

app.get('/', (req, res) => res.send({ success: true }))

app.use('/graphql', cors(), express.json(), expressMiddleware(server))

app.listen(4001)
