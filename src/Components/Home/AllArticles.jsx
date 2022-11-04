import * as API from '../../Api';
import { useEffect, useState } from 'react';
import { ArticlesCard } from '../Cards/ArticlesCard';
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { searchArticles } from '../../Utils/Utils';

export const AllArticles = () => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [err, setErr] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    let param = searchParams.get('search')
    if(param === null) param = window.location.href.split('=')[1]

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

    const searchedArticles = searchArticles(param, articles);

    useEffect(() => {
        setIsLoading(true)
        if(!param){
            setSearchParams({})
            setTimeout(() => {
                setSearchParams({})
                setIsLoading(false);
            }, 100);
        }else{
            setTimeout(() => {
                setIsLoading(false);
            }, 600);
        }  
    },[param])
    
    if (isLoading) return <h1 className='user-feedback'>...</h1>
    else
    if(err) return <h2>{err}</h2>
    else
    if(searchedArticles.length < 1) return <h1 className='user-feedback'>No Results</h1>
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
