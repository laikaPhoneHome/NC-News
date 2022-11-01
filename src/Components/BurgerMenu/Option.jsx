export const Option = ({value, handleClick}) => {
    const { slug, description } = value;
    return (
        <li>
            <h2 className="burger-option" onClick={() => handleClick(value)}>{slug}</h2>
        </li>
    )
}