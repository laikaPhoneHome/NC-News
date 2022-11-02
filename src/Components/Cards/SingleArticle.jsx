import { convertTimestampToDate } from "../../Utils/Utils"
import { AuthorCard } from "./AuthorCard"
import * as API from '../../Api'
import { useState, useEffect } from "react"
export const SingleArticle = ({article}) => {
    const {title, topic, author, body, created_at, votes} = article

    const [user, setUser] = useState(author)

    useEffect(() => {
        API.fetchUserByUsername(user)
        .then(({user}) => {
            setUser(user);
        })
    },[user])

    const timeStamp = convertTimestampToDate(created_at)
    const {created: {date, time}} = timeStamp;

    return (
        <article class="single-article">
            <AuthorCard user={user}/>
            <h2>{title}</h2>
            <p>{topic}</p>
            <p>{body}</p>
            <p>{time} {date}</p>
            <p>votes: {votes}</p>
        </article>
    )
}