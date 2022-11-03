import { useEffect } from "react"
import { SingleArticle } from "../Cards/SingleArticle"
import { Header } from "../Header"
import * as API from '../../Api'
import { useParams } from 'react-router-dom'
import { useState } from "react"
import { Comments } from "../Comments"

export const ArticleLandling = () => {
    const [article, setArticle] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const {article_id} = useParams();

    useEffect(() => {
        setIsLoading(true)
        API.fetchArticleById(article_id)
        .then(({article}) => {
            setArticle(article);
            setIsLoading(false);
        })
    },[])

    return (
    <div>
        <Header />
        {isLoading ? <h2 className='user-feedback'>...</h2> 
        :<SingleArticle article={article} />}
        <div className="comments">
            <Comments article_id={article_id} />
        </div>

    </div>
    )
}