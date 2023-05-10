const { faker } = require('@faker-js/faker');

const createRandomStory =  () => {
    return {
        storyId: faker.datatype.uuid(),
        author: faker.name.fullName(),
        postedAt: faker.date.past(),
        tags: faker.lorem.words(),
        title: faker.lorem.sentence(),
        body: faker.lorem.paragraphs(15, ''),
    }
}

let storyList = []
const generateStories = () => {
    for (let i = 0; i < 10; i++) {
        storyList.push(createRandomStory())
    }
    return storyList
}

const stories = generateStories()

module.exports = stories;