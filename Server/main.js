//NOTE imports
import express from 'express'
import bp from 'body-parser'
import './db/dbConfig'
import BlogController from './Controllers/blogController';

let port = 3000
let server = express()
server.use(bp.json({ limit: '50mb' }))

//NOTE register routes here
server.use('/api/blogs', new BlogController().router)
server.use('/', express.static(__dirname + '/../public'))

server.use((error, req, res, next) => {
  res.status(error.status || 400).send(error)
})

server.listen(port, () => {
  console.log("your server is running on port: ", port, " You better go catch it!")
})


