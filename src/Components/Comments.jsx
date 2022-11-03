import * as API from '../Api';
import { CommentCard } from './Cards/CommentCard';
import { useEffect, useState } from 'react';
export const Comments = (article_id) => {
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        setIsLoading(true)
        API.fetchComments(article_id)
        .then(({comments}) => {
            setIsLoading(false);
            setComments(comments)
        })

    },[])
    

    return (
    <section className="comment-list">
        {comments.map(comment => {
            return <CommentCard comment={comment}/>
        })}
    </section>
    )
}