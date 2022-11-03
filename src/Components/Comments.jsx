import * as API from '../Api';
import { CommentCard } from './Cards/CommentCard';
export const Comments = (article_id) => {
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    API.fetchComments(article_id)
    .then(({comments}) => {
        setIsLoading(false);
        setComments(comments)
    },[])

    return (
    <section>
        {comments.map(comment => {
            return <CommentCard comment={comment}/>
        })}
    </section>
    )
}