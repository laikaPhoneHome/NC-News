import axios from 'axios';

const NewsAPI = axios.create({
    baseURL: 'https://nc-news-laika.herokuapp.com/api'
})

export const fetchArticles = (topic, params) => {
    console.log(params)
    if(topic)return NewsAPI.get(`/articles?topic=${topic}`, params)
    else
    return NewsAPI.get(`/articles`, params)
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
export const patchVotes = (vote, pathAndId) => {
    if(vote === null) return Promise.reject();
    return NewsAPI.patch(`/${pathAndId}`, {"inc_votes" : vote})
    .then(({data}) => {
        return data;
    })
}
export const fetchComments = (article_id) => {
    return NewsAPI.get(`/articles/${article_id}/comments`)
    .then(({data}) => {
        return data;
    })
}
export const postComment = (article_id, comment) => {
    if(comment.body === null) return Promise.reject();
    return NewsAPI.post(`/articles/${article_id}/comments`,comment)
    .then(({data}) => {
        console.log(data)
        return data;
    })
}
export const fetchUsers = () => {
    return NewsAPI.get('/users')
    .then(({data}) => {
        return data;
    })
}
export const  deleteComment = (comment_id) => {
    return NewsAPI.delete(`/comments/${comment_id}`)
    .then(({data}) => {
        return data;
    })
}