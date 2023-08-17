// Tests
const express = require('express');
const fastify = require('fastify')();
const appExpress = express();

appExpress.get('/express', (req, res) => {
    res.send('TEST 1 - EXPRESS')
})

fastify.get('/fastify', (req, res) => {
    res.send('TEST 2 - FASTIFY')
})

appExpress.listen(3000, () => {
    console.log('Express server listen on port 3000')
})

fastify.listen(4000, () => {
    console.log('Fastify listen on port 4000')
})


