import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { CurrentUser } from "./Cards/CurrentUser";
import * as API from '../Api';


export const Header = () => {
    const [topics, setTopics] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true)
        API.fetchTopics()
        .then(({topics}) => {
            setTopics(topics);
            setIsLoading(false);
        })
    },[])

    return (
    <div className="header">
        <section className="header-top">
        <h1 className="title">NC News</h1>
        <CurrentUser />
        </section>
        <section className="header-bottom">
            <ul className="topic-list">
            {topics.map(topic => {
                const { slug, description } = topic;
                return (
                <Link to={`/articles/${slug}`}>
                    <h3 className="topic" key={slug}>{slug}<span>{description}</span></h3>
                </Link>
                )
            })}
            <h3>|</h3>
            </ul>
            <input className="article-search" placeholder="Search" type="text"/>
        </section>
    </div>
    
    )
}