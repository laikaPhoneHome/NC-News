import * as API from '../../Api';
import { useEffect, useState } from 'react';
import { ArticlesCard } from '../Cards/ArticlesCard';

export const AllArticles = () => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [err, setErr] = useState(null);

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

    
    if(isLoading) return <h2>Loading ...</h2>
    else
    if(err) return <h2>{err}</h2>
    return (
    <ul>
        {
        articles.map(article => {
            return <ArticlesCard article={article}/>
    })}
    </ul>
    )
    
}
