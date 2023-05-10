const fastify = require('fastify')({ logger: true })
const { storyRoutes } = require('./routes/story.route')

const serverOptions = {
    port: 3000,
}

fastify.register(storyRoutes)

const start = async () => {
    try {
        await fastify.listen(serverOptions)
    } catch (error) {
        fastify.log.error(error)
        process.exit(1)
    }
}

start() 

