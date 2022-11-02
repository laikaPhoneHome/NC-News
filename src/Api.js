import axios from 'axios';

const NewsAPI = axios.create({
    baseURL: 'https://nc-news-laika.herokuapp.com/api'
})

export const fetchArticles = (topic, order) => {
    if(order && topic)return NewsAPI.get(`/articles${order}${topic}`)
    if(order)return NewsAPI.get(`/articles${order}`)
    if(topic)return NewsAPI.get(`/articles?topic=${topic}`)
    if(!order && !topic)return NewsAPI.get(`/articles`)
    .then(({data}) => {
        return data;
    })
}
export const fetchTopics = () => {
    return NewsAPI.get(`/topics`)
    .then(({data}) => {
        return data;
    })
}
export const fetchArticleById = (article_id) => {
    return NewsAPI.get(`/articles/${article_id}`)
    .then(({data}) => {
        return data;
    })
}
export const fetchUserByUsername = (username) => {
    return NewsAPI.get(`/users/${username}`)
    .then(({data}) => {
        return data;
    })
}
export const patchArticleVotes = (vote, article_id) => {
    return NewsAPI.patch(`/articles/${article_id}`, { inc_votes: vote})
    .then(({data}) => {
        return data;
    })
}