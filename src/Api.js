import axios from 'axios';

const NewsAPI = axios.create({
    baseURL: 'https://nc-news-laika.herokuapp.com/api'
})

export const fetchArticles = (order, category) => {
    return NewsAPI.get(`/articles${order}${category}`)
    .then(({data}) => {
        return data;
    })
}