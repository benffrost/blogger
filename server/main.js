import express from 'express'
import bp from 'body-parser'
import './db/dbconfig'

import BlogController from './controllers/BlogController'

let port = 3000

let server = express()

server.use(bp.json({ limit: '50mb' }))

//TODO import & register routes here
let path = __dirname + '/../public/'
server.use('/', express.static(path))

server.use('/api/blogs', new BlogController().router)


server.use((error, req, res, next) => {
  res.status(error.status || 400).send(error)
})

server.listen(port, () => {
  console.log("your server is running on port: ", port, " You better go catch it!")
})