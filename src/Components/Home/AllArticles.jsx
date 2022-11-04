import * as API from '../../Api';
import { useEffect, useState } from 'react';
import { ArticlesCard } from '../Cards/ArticlesCard';
import { useSearchParams, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { searchArticles } from '../../Utils/Utils';
import { createFetchQuery } from '../../Utils/Utils';

export const AllArticles = () => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [err, setErr] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const [orderParams, setOrderParams] = useSearchParams();
    const [orderQuery, setOrderQuery] = useState('');
    const [queryObj, setQueryObj] = useState({})
    const [params, setParams] = useState({})

    let searchParam = searchParams.getAll('search')[0]

    if(searchParam === null) searchParam = window.location.href.split('=')[1]
    const location = useLocation()

    useEffect(() => {
        setIsLoading(true);
        API.fetchArticles(undefined, params)
        .then(({articles: {articles, total_count}}) => {
            setArticles(articles);
            setIsLoading(false);
        })
        .catch((err) => {
            setErr(err)
        })
    },[params])

    const searchedArticles = searchArticles(searchParam, articles);
    
    useEffect(() => {
        setIsLoading(true)
        if(!searchParam){
            setTimeout(() => {
                setIsLoading(false);
            }, 100);
        }else{
            setTimeout(() => {
                setIsLoading(false);
            }, 600);
        }  
    },[searchParam])

    const handleChange = (event) => {

        const newOrder = {...orderParams};

        newOrder[event.target.id] = event.target.value;
        setOrderParams((current) =>{
            current[event.target.id] = event.target.value;
        });
        setParams({params : {...orderParams}})

    }
    let order = 'Order:';
    let sort_by = 'Sort by:';
    // console.log(params)
    if(params.hasOwnProperty('params')){
        if(params.params.hasOwnProperty('order')){
            order = params.params.order.toLowerCase();
        }
        if(params.params.hasOwnProperty('sort_by')){
            sort_by = params.params.sort_by;
            if(sort_by === 'created_at'){
                sort_by = 'Date created'
            }
            if(sort_by === 'votes'){
                sort_by = 'Most popular'
            }
        }
    }
    
    if (isLoading) return <h1 className='user-feedback'>...</h1>
    else
    if(err) return <h2>{err}</h2>
    else
    if(searchedArticles.length < 1) return <h1 className='user-feedback'>No Results</h1>
    return (
    <main>
        <select id="order" onChange={handleChange}>
            <option value="">{order}</option>
            {order === 'asc' ? <></> :<option value="ASC">asc</option>}
            {order === 'desc'? <></> :<option value="DESC">desc</option>}
        </select>
        <select id="sort_by" onChange={handleChange}>
            <option value="">{sort_by}</option>
            {sort_by === 'Most popular' ? <></> :<option value="votes">Most popular</option>}
            {sort_by === 'Date created' ? <></> :<option value="created_at">Date created</option>}
            {sort_by === 'author' ? <></> :<option value="author">Author</option>}
        </select>
        <ul className="all-articles">
            {searchParam ?
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
    </main>
    )
}
