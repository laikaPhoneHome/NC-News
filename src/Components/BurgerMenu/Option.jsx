export const Option = ({value, handleClick}) => {
    const { slug, description } = value;
    return (
        <li>
            <h2 onClick={() => handleClick(value)}>{slug}</h2>
        </li>
    )
}