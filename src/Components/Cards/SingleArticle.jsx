import { convertTimestampToDate } from "../../Utils/Utils"
export const SingleArticle = ({article: {title, topic, author, body, created_at, votes}}) => {


    return (
        <article>
            <h3>{author}</h3>
            <h2>{title}</h2>
            <p>{topic}</p>
            <p>{body}</p>
            <p>posted: {}</p>
            <p>votes: {votes}</p>
        </article>
    )
}