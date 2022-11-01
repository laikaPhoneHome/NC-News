export const Option = ({value, handleClick}) => {
    return (
        <li>
            <h2 onClick={() => handleClick(value)}>{value}</h2>
        </li>
    )
}