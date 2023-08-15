const connectionString = 'mongodb+srv://diegomirhan:ivus3JguYRi8HWSu@nodeexpressprojects.ub5nggs.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority'
const mongoose = require('mongoose')

mongoose.connect(connectionString).then(() => console.log('Connected Database!')).catch((err) => console.log(err))