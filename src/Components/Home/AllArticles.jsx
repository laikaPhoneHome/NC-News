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
    const [params, setParams] = useState({});

    let searchParam = searchParams.getAll('search')[0]

    if(searchParam === null) searchParam = window.location.href.split('=')[1]
    const location = useLocation();

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

        setOrderParams((current) =>{
            current[event.target.id] = event.target.value;
        });
        setParams({params : {...orderParams}})
    }

    let order = 'Order:';
    let sort_by = 'Sort by:';

    if(params.hasOwnProperty('params')){
        
        if(params.params.hasOwnProperty('order')){
            params.params.order === 'DESC' ?
            order = 'desc' : order = 'asc';
        }
        if(params.params.hasOwnProperty('sort_by')){
            if(params.params.sort_by === 'created_at'){
                sort_by = 'Date created';
            }
            if(params.params.sort_by === 'votes'){
                sort_by = 'Most popular';
            }
            if(params.params.sort_by === 'author'){
                sort_by = 'Author';
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
        <h3 className="topic-title">All Articles</h3>
        <section className="dropdown">
        <select className='order-dropdown' id="order" onChange={handleChange}>
            <option value="">{order}</option>
            {order === 'asc' ? <></> :<option value="ASC">asc</option>}
            {order === 'desc'? <></> :<option value="DESC">desc</option>}
        </select>
        <select className='sort_by-dropdown' id="sort_by" onChange={handleChange}>
            <option value="">{sort_by}</option>
            {sort_by === 'Most popular' ? <></> :<option value="votes">Most popular</option>}
            {sort_by === 'Date created' ? <></> :<option value="created_at">Date created</option>}
            {sort_by === 'Author' ? <></> :<option value="author">Author</option>}
        </select>
        </section>
        <ul className="all-articles">
            {searchParam ?
            searchedArticles.map(article => {
                return <Link key={article.article_id} to={`/article/${article.article_id}`}>
                    <ArticlesCard className="article-card" key={article.article_id} article={article}/>
                </Link>

        }): articles.map(article => {
            return <Link key={article.article_id} to={`/article/${article.article_id}`}>
                <ArticlesCard className="article-card" key={article.article_id} article={article}/>
            </Link>
        })}

        </ul>
    </main>
    )
}
