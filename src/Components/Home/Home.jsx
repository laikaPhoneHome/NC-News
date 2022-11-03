import { Header } from "../Header"
import { AllArticles } from "./AllArticles"
import { useSearchParams } from 'react-router-dom'


export const Home = () => {

    // console.log(useQuery())
    // console.log(useSearchParams)


    return (
    <div>
        <Header />
        <AllArticles />
    </div>
    )
}