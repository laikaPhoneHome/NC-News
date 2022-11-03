import * as API from '../../Api';
import { useEffect, useState } from 'react';
import { ArticlesCard } from '../Cards/ArticlesCard';
import { useSearchParams } from 'react-router-dom';

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

    const search = searchParams.get('search')
    let searchedArticles = [];

    searchedArticles = [...articles]
    searchedArticles = searchedArticles.filter(article => {
      return article.title.toLowerCase().split(/\W/g).includes(search.toLowerCase())
    })

    
    
    if (isLoading) return <h2>Loading ...</h2>
    else
    if(err) return <h2>{err}</h2>
    return (
    <ul className="all-articles">
        {
        articles.map(article => {
            return <ArticlesCard className="article-card" key={article.article_id} article={article}/>
    })}
    </ul>
    )
    
}
