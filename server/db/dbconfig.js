import mongoose from 'mongoose'


const connectionString = 'mongodb+srv://student:student@cluster-0-jetyp.gcp.mongodb.net/test?retryWrites=true&w=majority'//TODO

let connection = mongoose.connection

mongoose.connect(connectionString, {
  useNewUrlParser: true
})

//NOTE log any errors 
connection.on('error', err => {
  console.error('[DATABASE ERROR]:', err)
})

//NOTE Confirm connection
connection.once('open', () => {
  console.log("Connected to the DB!")
})