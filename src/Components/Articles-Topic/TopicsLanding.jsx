import { Header } from "../Header";
import { useParams } from 'react-router-dom';
import { TopicArticles } from "./TopicArticles";

const TopicsLanding = () => {
    const { topic_id } = useParams();
    return (
        <div>
            <Header  />
            <TopicArticles topic_id={topic_id}/>
        </div>
    )
}