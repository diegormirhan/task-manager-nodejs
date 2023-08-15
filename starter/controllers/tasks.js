const getAllTasks = (request, response) => {
    response.send('get all tasks')
}

const createTask = (request, response) => {
    response.json(request.body)
}

const getTask = (request, response) => {
    response.json({ id:request.params.id })
}

const updateTask = (resquest, response) => {
    response.send('update task')
}

const deleteTask = (request, response) => {
    response.send('delete task')
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
};