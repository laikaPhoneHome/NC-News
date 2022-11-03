import { ArticlesCard } from "../Cards/ArticlesCard";
import { useEffect, useState } from "react";
import * as API from '../../Api'
import { Link } from 'react-router-dom'



export const TopicArticles = ({topic}) => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [err, setErr] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        API.fetchArticles(topic)
        .then(({data: articles}) => {
            setArticles(articles.articles.articles);
            setIsLoading(false);
        })
    },[topic])

    if(isLoading) return <h2>Loading ...</h2>
    else
    if(err) return <h2>{err}</h2>
    else
    return (
    <ul className="all-articles">
        {
        articles.map(article => {
            return (
                <Link to={`/article/${article.article_id}`}>
                    <ArticlesCard className="article-card" key={article.article_id} article={article}/>
                </Link>
            )
    })}
    </ul>
    )
}