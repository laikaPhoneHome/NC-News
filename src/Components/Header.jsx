import { CurrentUser } from "./Cards/CurrentUser"


export const Header = () => {

    return (
    <div className="header">
        <section className="header-top">
        <h1 className="title">NC News</h1>
        <CurrentUser />
        </section>
        <section className="header-bottom">
            {'topics map'}
            <input placeholder="Search" type="text"/>
        </section>
    </div>
    
    )
}