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

<<<<<<< HEAD

    
=======
>>>>>>> 707c35c88e559d2bfbb8624a466ec412207dd839
    useEffect(() => {
        setIsLoading(true)
        API.fetchArticleById(article_id)
        .then(({article}) => {
            setArticle(article);
            setIsLoading(false);
        })
    },[])

<<<<<<< HEAD
=======
    

>>>>>>> 707c35c88e559d2bfbb8624a466ec412207dd839
    return (
    <div>
        <Header />
        {isLoading ? <h2>Loading ...</h2> :<SingleArticle article={article} />}
    </div>
    )
}