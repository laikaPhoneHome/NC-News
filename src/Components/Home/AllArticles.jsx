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
    <ul className="all-articles">
        {
        articles.map(article => {
            <Link to={`/article/${article.article_id}`}>
                return <ArticlesCard className="article-card" key={article.article_id} article={article}/>
    })}     </Link>
    </ul>
    )
    
}
