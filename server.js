const fastify = require('fastify')({logger: true})
const serverOptions = {
    port: 3000,
}

fastify.get('/stories', (req, reply) => {
    reply.send({
        message: 'Hello, World!'
    })
})

const start = async () => {
    try {
        await fastify.listen(serverOptions)
    } catch (error) {
        fastify.log.error(error)
        process.exit(1)
    }
}

start()

