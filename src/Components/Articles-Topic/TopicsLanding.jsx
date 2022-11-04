import { Header } from "../Header";
import { useParams } from 'react-router-dom';
import { TopicArticles } from "./TopicArticles";

export const TopicsLanding = () => {
    const { topic } = useParams();


    return (
        <div>
            <Header  />
            <h3 className="topic">{topic}</h3>
            <TopicArticles topic={topic}/>
        </div>
    )
}