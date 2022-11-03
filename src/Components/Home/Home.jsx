import { Header } from "../Header"
import { AllArticles } from "./AllArticles"
import { useSearchParams } from 'react-router-dom'


export const Home = () => {

    return (
    <div>
        <Header />
        <AllArticles />
    </div>
    )
}