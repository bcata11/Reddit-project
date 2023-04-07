import axios from "axios";


export const redditapi = axios.create({
    baseURL: 'https://www.reddit.com'
})

const getSubs = async () => {
    try {
        const response = await redditapi.get('/subreddits.json')
        // return response.data.children.map((subreddit) => subreddit.data)
        return response.data.data.children.map((subreddit) => subreddit.data)
    } catch (err) {
        console.error(err.response.data.message)
    }
}

export const getPosts = async (subreddit) => {
    try {
        const response = await redditapi.get(`${subreddit}.json`)
        return  response.data.data.children.map((post) => post.data)
    } catch (err) {
        console.error(err.response.data.message)
    }
}

export default getSubs;

