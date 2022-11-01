import { useState } from "react";

export const BurgerMenu = (props) => {
    const { children } = props;

    const [isClosed, setIsClosed] = useState(true);

    const handleClick = () => {
        setIsClosed((current) => !current);
    }

    if(isClosed) return <button onClick={handleClick}>=</button>
    else
    return (
        <ul>
            <li>
                <button onClick={handleClick}>=</button>
            </li>
                {children}
        </ul>
    )
}