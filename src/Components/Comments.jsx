import * as API from '../Api';
import { CommentCard } from './Cards/CommentCard';
import { useEffect, useState, useContext } from 'react';
import { UserContext } from '../Context/UserContext';

export const Comments = ({article_id}) => {
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [input, setInput] = useState('');
    const [newComment, setNewComment] = useState(null);
    const { currentUser } = useContext(UserContext);

    useEffect(() => {
        setIsLoading(true)
        API.fetchComments(article_id)
        .then(({comments}) => {
            setIsLoading(false);
            setComments(comments);
        })
    },[article_id]);

    const handleSubmit = (input) => {
        setNewComment(input);
    }

    const handleChange = (event) => {
        if(event.key === 'Enter') {
            event.target.value = '';
            handleSubmit(input);
        }
        else{
            const newInput = event.target.value;
            setInput(newInput);
        }
    }

    useEffect(() => {
        if(newComment === null) return;
        else
        setInput('')
        API.postComment(article_id,{username: currentUser.username, body: newComment})
        .then(({comment}) => {
            setNewComment(null)
            const newComments = [...comments];
            newComments.unshift(comment);
            setComments(newComments);
        })
    },[newComment]);
    

    return (
    <div className="comment-container">
        <label className="comment-label">Write a comment:</label>
        <input onKeyDown={(event) => handleChange(event)} onChange={(event) => handleChange(event)} placeholder="Something to say...?" id="comment" className='comment-input' type="text"></input>
        <section className="comment-list">
            {comments.map(comment => {
                return <CommentCard key={comment.comment_id} comment={comment}/>
            })}
        </section>
    </div>
    )
}