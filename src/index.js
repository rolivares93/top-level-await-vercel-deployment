import express from 'express'

async function init() {
  await new Promise(resolve => setTimeout(resolve, 1000))
}

await init()

const app = express()

app.get('/', (req, res) => {
  res.send('Hello, World')
})

app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000')
})
