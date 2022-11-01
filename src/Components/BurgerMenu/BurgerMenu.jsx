import { useState } from "react";

export const BurgerMenu = (props) => {
    const { children } = props;

    const [isClosed, setIsClosed] = useState(true);

    const handleClick = () => {
        setIsClosed((current) => !current);
    }

    if(isClosed) return<div> <button className="burger-button" onClick={handleClick}>=</button> </div>
    else
    return (
        <div>
            <button className="burger-button" onClick={handleClick}>=</button>
        <ul>
                <li>
                    
                </li>
                    {children}
            </ul>
        </div>
    )
}