import { convertTimestampToDate } from "../../Utils/Utils"
import { AuthorCard } from "./AuthorCard"
import * as API from '../../Api'
import { useState, useEffect } from "react"
import { Voter } from "../Voter"
export const SingleArticle = ({article}) => {
    const {title, topic, author, body, created_at, votes} = article

    const [user, setUser] = useState(null)
    const [articleAuthor, setArticleAuthor] = useState(author);
    const [displayVotes, setDisplayVotes] = useState(votes)


    useEffect(() => {
        API.fetchUserByUsername(articleAuthor)
        .then(({user}) => {
            setUser(user);
        })
    },[articleAuthor])

    const timeStamp = convertTimestampToDate(created_at)
    const {created: {date, time}} = timeStamp;
    return (
        <article className="single-article">
            {user === null ? <div></div> : <AuthorCard user={user}/>}
            <Voter className="article-voter" target={article} setVotes={setDisplayVotes} votes={displayVotes}/>
            <h2>{title}</h2>
            <p className="article-info">{topic}</p>
            <p className="article-body">{body}</p>
            <p className="article-info">{time} {date}</p>
            {/* <p className="article-votes">Votes: {displayVotes}</p> */}
        </article>
    )
}