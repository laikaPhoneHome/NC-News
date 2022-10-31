import * as API from '../../Api';
import { useEffect, useState } from 'react';

export const AllArticles = () => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        API.fetchArticles()
        .then(({articles}) => {
            setArticles(articles);
            setIsLoading(false);
            console.log(articles);
        })
    },[])
    
    if(isLoading) return <h2>Loading ...</h2>
    else
    return <></>
}
