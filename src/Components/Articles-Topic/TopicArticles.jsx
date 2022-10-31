import { Header } from "../Header"
import { fetchArticles } from "../../Api";
import { useEffect } from "react";


export const TopicArticles = ({topic_id}) => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    

    useEffect(() => {
        setIsLoading(true);
        API.fetchArticles(topic_id)
        .then(({articles: {articles, total_count}}) => {
            setArticles(articles);
            setIsLoading(false);
        })
    })

    if(isLoading) return <h2>Loading ...</h2>
    else
    if(err) return <h2>{err}</h2>
    else
    return (
    <ul className="all-articles">
        {
        articles.map(article => {
            return <ArticlesCard className="article-card" key={article.article_id} article={article}/>
    })}
    </ul>
    )
}