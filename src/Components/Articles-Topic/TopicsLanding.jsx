import { Header } from "../Header";
import { useParams, Link } from 'react-router-dom';
import { TopicArticles } from "./TopicArticles";

export const TopicsLanding = () => {
    const { topic } = useParams();
    return (
        <div>
            <Header  />
            <TopicArticles topic={topic}/>
        </div>
    )
}