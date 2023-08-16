const connectionString = 'your api key here'
const mongoose = require('mongoose')

mongoose.connect(connectionString).then(() => console.log('Connected Database!')).catch((err) => console.log(err))