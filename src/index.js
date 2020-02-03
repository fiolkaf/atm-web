import express from 'express'
import Controller from './controller'

const app = express()
app.use(express.static('public'))

const port = process.env.port || 8080

app.get('/:amount', Controller.get)

app.listen(port, () => console.log(`ATM server started on port ${port}`))
