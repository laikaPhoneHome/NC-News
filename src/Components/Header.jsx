import { CurrentUser } from "./Cards/CurrentUser"




export const Header = () => {

    return (
    <div>
        <h1>NC News</h1>
        <CurrentUser />
        <section>
            {'topics map'}
            <input type="text">Search</input>
        </section>
    </div>
    
    )
}