import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { CurrentUser } from "./Cards/CurrentUser";
import * as API from '../Api';
import { BurgerMenu } from "./BurgerMenu/BurgerMenu";
import { SelectedOption } from "./BurgerMenu/SelectedOption";
import { Option } from "./BurgerMenu/Option";


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
            {topics.map((topic, i) => {
                const { slug, description } = topic;
                i < 6 ? (
                <Link to={`/articles/${slug}`}>
                    <h3 className="topic" key={slug}>{slug}<span>{description}</span></h3>
                </Link>
                )
                : (
                <div>
                    <SelectedOption value={chosenTopic} />
                    <BurgerMenu>
                        <Option value={topic} />
                    </BurgerMenu>
                </div>
                )
            })}
            <h3>|</h3>
            </ul>
            <input className="article-search" placeholder="Search" type="text"/>
        </section>
    </div>
    
    )
}