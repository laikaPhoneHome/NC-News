import * as API from '../Api';
import { CommentCard } from './Cards/CommentCard';
import { useEffect, useState } from 'react';
export const Comments = (article_id) => {
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [input, setInput] = useState('')
    const [newComment, setNewComment] = useState(null)


    useEffect(() => {
        setIsLoading(true)
        API.fetchComments(article_id)
        .then(({comments}) => {
            setIsLoading(false);
            setComments(comments)
        })
    },[])

    const handleChange = (event) => {
        const input = event.target.value;
        setInput(input);
        if(event.key === 'Enter') handleSubmit(input);
    }
    const handleSubmit = (input) => {
        setComments()
    }

    useEffect(() => {
        API.postComment()
        .then(({comment}) => {
            const newComments = [...comments];
            newComments.unshift(comment);
            setComments(newComments);
        })
    },[])
    

    return (
    <div className="comment-container">
        <label className="comment-label" for="comment">Write a comment:</label>
        <input onChange={handleChange} id="comment" className='comment-input' type="text"></input>
        <section className="comment-list">
            {comments.map(comment => {
                return <CommentCard comment={comment}/>
            })}
        </section>
    </div>
    )
}