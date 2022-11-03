import { convertTimestampToDate } from "../../Utils/Utils";
import { Voter } from "../Voter";

export const CommentCard = (comment) => {
    const {author, body, votes, created_at} = comment;
    const stamp = convertTimestampToDate(created_at);
    const [displayVotes, setDisplayVotes] = votes;

    return (
        <div>
            <h3>{author}</h3>
            <h4>{body}</h4>
            <p>{displayVotes}</p>
            <p>created at: {stamp.time} {stamp.date}</p>
            <Voter target={comment} votes={displayVotes} setVotes={setDisplayVotes} />
        </div>
    )
}