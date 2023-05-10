const stories = require('../data/stories')

const storyRoutes = (fastify, options, done) => {
    fastify.get('/stories', (req, reply) => {
        reply.send({
            message: 'Hello, World!',
            data: stories
        })
    })

    fastify.get('/stories/:id', (req, reply) => {
        const { id } = req.params

        const story = stories.find(story => story.storyId === id)
        reply.send({
            message: 'Hello, World!',
            data: story
        })
    })

    done()
}

module.exports = {
    storyRoutes
}