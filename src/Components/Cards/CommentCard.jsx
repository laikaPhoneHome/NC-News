import { convertTimestampToDate } from "../../Utils/Utils";
import { Voter } from "../Voter";
import { useState } from 'react'

export const CommentCard = ({comment}) => {
    const {author, body, votes, created_at} = comment;
    const stamp = convertTimestampToDate(created_at);
    const [displayVotes, setDisplayVotes] = useState(votes);
    const {created: {time, date}} = stamp;

    return (
        <div className="comment-card">
            <h3>{author}</h3>
            <p>{body}</p>
            <p>created at: {time} {date}</p>
            {/* <p className='comment-votes'>{displayVotes}</p> */}
            <div className="comment-voter">
            <Voter  target={comment} votes={displayVotes} setVotes={setDisplayVotes} />
            </div>
        </div>
    )
}