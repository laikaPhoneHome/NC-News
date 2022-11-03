import * as API from '../../Api';
import { useEffect, useState } from 'react';
import { ArticlesCard } from '../Cards/ArticlesCard';
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom'

export const AllArticles = () => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [err, setErr] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        setIsLoading(true);
        API.fetchArticles()
        .then(({articles: {articles, total_count}}) => {
            setArticles(articles);
            setIsLoading(false);
        })
        .catch((err) => {
            setErr(err)
        })
    },[])

    let searchedArticles = [];
    const param = searchParams.get('search')

    searchedArticles = [...articles]
    param ?
    searchedArticles = searchedArticles.filter(article => {
        const titleSearch = article.title.toLowerCase().split(/\W/g);
        const descriptionSearch = article.body.toLowerCase().split(/\W/g);;
        const topicSearch = article.topic.toLowerCase();

        return titleSearch.join('').includes(param.toLowerCase())
        || descriptionSearch.includes(param.toLowerCase())
        || topicSearch.includes(param.toLowerCase());
    })
    : searchedArticles = [null]
    
    if (isLoading) return <h2>Loading ...</h2>
    else
    if(err) return <h2>{err}</h2>
    return (
    <ul className="all-articles">
        {param ?
        searchedArticles.map(article => {
            return <Link to={`/article/${article.article_id}`}>
                <ArticlesCard className="article-card" key={article.article_id} article={article}/>
            </Link>

    }): articles.map(article => {
        return <Link to={`/article/${article.article_id}`}>
            <ArticlesCard className="article-card" key={article.article_id} article={article}/>
        </Link>
    })}

    </ul>
    
    
)}
