import { convertTimestampToDate } from "../../Utils/Utils";
import { Voter } from "../Voter";
import { useState, useContext } from 'react'
import * as API from '../../Api';
import { UserContext } from "../../Context/UserContext";

export const CommentCard = ({comment, comments, setComments}) => {
    const {author, body, votes, created_at, comment_id} = comment;
    const stamp = convertTimestampToDate(created_at);
    const [displayVotes, setDisplayVotes] = useState(votes);
    const {created: {time, date}} = stamp;
    const { currentUser } = useContext(UserContext);

    const handleDelete = (event) => {
        const id = event.target.value
        const newComments = [...comments];
        const deleteI = newComments.findIndex(comment => comment.comment_id == id);
        const comment = newComments.splice(deleteI, 1);
        setComments(newComments);
        API.deleteComment(id)
        .then(({data}) => {
        })
        .catch((err)=> {
            if(err) {
                const newComments = [...comments];
                newComments.splice(deleteI, 0, comment);
                setComments(newComments);
            }
        })
    }

    return (
        <div className="comment-card">
            {comment.author === currentUser.username ?
                    <div className="delete-container"><button className="delete-comment" value={comment.comment_id} onClick={handleDelete}>Delete</button></div>
                : <></>}
            <h3>{author}</h3>
            <p>{body}</p>
            <p>created at: {time} {date}</p>
            <p className='comment-votes'>{displayVotes}</p>
            <Voter className="comment-voter" target={comment} votes={displayVotes} setVotes={setDisplayVotes} />
        </div>
    )
}