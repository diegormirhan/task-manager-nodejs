const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')

// middleware
app.use(express.json())


// routes
app.get('/hello', (request, response) => {
    response.send('Task Manager App')
})

app.use('/api/v1/tasks', tasks);
const port  = 3000

const start = async () => {
    try {

    } catch (error) {
        
    }
}



app.listen(port, console.log(`Server is listening on port ${port}...`));
