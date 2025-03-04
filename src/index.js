import express from 'express'

async function init() {
  await new Promise(resolve => setTimeout(resolve, 1000))
}

await init()

const app = express()

app.get('/', (req, res) => {
  res.send('Hello, World')
})
