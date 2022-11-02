import { Header } from "../Header"
import { AllArticles } from "./AllArticles"
console.log(window)

export const Home = () => {
    return (
    <div>
        <Header />
        <AllArticles />
    </div>
    )
}