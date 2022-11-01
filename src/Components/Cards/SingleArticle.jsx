import { useEffect } from "react"
import { convertTimestampToDate } from "../../Utils/Utils"
import { AuthorCard } from "./AuthorCard"
import * as API from '../../Api'
import { useState } from "react"
export const SingleArticle = ({article: {title, topic, author, body, created_at, votes}}) => {
    const [author, setAuthor] = useState(null)
    useEffect(() => {
        API.fetchUserByUsername(author)
        .then(({user}) => {
            setAuthor(user)
        })
    },[])

    return (
        <article>
            <AuthorCard author={author}/>
            <h2>{title}</h2>
            <p>{topic}</p>
            <p>{body}</p>
            <p>posted: {}</p>
            <p>votes: {votes}</p>
        </article>
    )
}