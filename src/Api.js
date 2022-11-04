import axios from 'axios';

const NewsAPI = axios.create({
    baseURL: 'https://nc-news-laika.herokuapp.com/api'
})

export const fetchArticles = (topic, params) => {
    if(params.hasOwnProperty('params')){
        if(params.params.hasOwnProperty('order')){
            params.params.order.toUpperCase();
        }
        if(params.params.hasOwnProperty('sort_by')){
            let sort_by = params.params.sort_by;
            if(sort_by === 'Date created'){
                sort_by = 'created_at'
            }
            if(sort_by === 'Most popular'){
                sort_by = 'votes'
            }
        }
    }
    if(topic)return NewsAPI.get(`/articles?topic=${topic}`,params)
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
    return NewsAPI.patch(`/${pathAndId}`, {"inc_votes" : vote})
    .then(({data}) => {
        return data;
    })
}
export const fetchComments = ({article_id}) => {
    return NewsAPI.get(`/articles/${article_id}/comments`)
    .then(({data}) => {
        return data;
    })
}