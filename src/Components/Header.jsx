import { useEffect, useState } from "react";
import { Link, useSearchParams } from 'react-router-dom';
import { CurrentUser } from "./Cards/CurrentUser";
import * as API from '../Api';
import { BurgerMenu } from "./BurgerMenu/BurgerMenu";
import { SelectedOption } from "./BurgerMenu/SelectedOption";
import { Option } from "./BurgerMenu/Option";
import { useNavigate } from 'react-router-dom'
import { UserContext } from "../Context/UserContext";


export const Header = () => {
    const [topics, setTopics] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [input, setInput] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const { user } = UserContext();

    useEffect(() => {
        setIsLoading(true)
        API.fetchTopics()
        .then(({topics}) => {
            setTopics(topics);
            setIsLoading(false);
        })
    },[])

    const handleSearch = (event) => {
        if(event.key === 'Enter') handleSubmit(input);
        else{
            const newInput = event.target.value;
            setInput(newInput);
        }
    }
    const handleSubmit = (input) => {
        if(input !== undefined){
            setSearchParams({search: input})
        }else
        setSearchParams({})
        const url2Param = window.location.href.split('?')[0];
        if(/[0-9]/g.test(url2Param[url2Param.length-1])){
            navigate(`/?search=${input}`)
        }
    }

    return (
    <div className="header">
        <section className="header-top">
            <Link to="/">
                <h1 className="title">NC Leaks</h1>
            </Link>
        <CurrentUser user={user} />
        </section>
        <section className="header-bottom">
            <ul className="topic-list">
            {topics.map((topic, i) => {
                const { slug, description } = topic;
                if(i < 6){ return (
                <Link to={`/articles/${slug}`}>
                    <h3 className="topic" key={slug}>{slug}<span>{description}</span></h3>
                </Link>
                )
                } else return(
                <section className="burger-menu">
                        <SelectedOption value={topic} />
                        <BurgerMenu className="burger-dropdown">
                           <Link to={`/articles/${slug}`}>
                                <Option className="burger-option" value={topic} />
                            </Link>
                        </BurgerMenu>
                </section>
                )
            })}
            <h3 className="divider">|</h3>
            </ul>
            <input onKeyDown={handleSearch} onChange={handleSearch} className="article-search" placeholder="Search" type="text"/>
        </section>
    </div>
    
    )
}