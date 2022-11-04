import { Header } from "../Header"
import { AllArticles } from "./AllArticles"

export const Home = () => {

    return (
    <div>
        <Header />
        <h3 className="topic">All Articles</h3>
        <AllArticles />
    </div>
    )
}