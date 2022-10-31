import axios from 'axios';

const NewsAPI = axios.create({
    baseURL: 'https://nc-news-laika.herokuapp.com/api'
})

export const fetchArticles = (order, topic) => {
    if(order && topic)return NewsAPI.get(`/articles${order}${topic}`)
    if(order)return NewsAPI.get(`/articles${order}`)
    if(topic)return NewsAPI.get(`/articles${topic}`)
    if(!order && !topic)return NewsAPI.get(`/articles`)
    .then(({data}) => {
        return data;
    })
}