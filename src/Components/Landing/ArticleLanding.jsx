import { useEffect } from "react"
import { SingleArticle } from "../Cards/SingleArticle"
import { Header } from "../Header"
import * as API from '../../Api'
import { useParams } from 'react-router-dom'
import { useState } from "react"

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
        <SingleArticle article={article} />
    </div>
    )
}