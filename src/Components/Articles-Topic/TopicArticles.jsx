import { ArticlesCard } from "../Cards/ArticlesCard";
import { useEffect, useState } from "react";
import * as API from '../../Api'
import { Link, useSearchParams } from 'react-router-dom'
import { searchArticles } from "../../Utils/Utils";



export const TopicArticles = ({topic}) => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [err, setErr] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const param = searchParams.get('search')

    useEffect(() => {
        setIsLoading(true);
        API.fetchArticles(topic)
        .then(({data: articles}) => {
            setArticles(articles.articles.articles);
            setIsLoading(false);
        })
    },[topic])

    const searchedArticles = searchArticles(param, articles)

    useEffect(() => {
        setIsLoading(true)
        console.log(param)
        if(!param){
            setTimeout(() => {
                setIsLoading(false);
            }, 100);
        }else{
            setTimeout(() => {
                setIsLoading(false);
            }, 500);
        } 
        
        
    },[param])

    if (isLoading) return <h1 className='user-feedback'>...</h1>
    else
    if(err) return <h2>{err}</h2>
    else
    if(searchedArticles.length < 1) return <h1 className='user-feedback'>No Results</h1>
    else
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
    )
}