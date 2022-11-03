export const LoginUserCard = ({user}) => {
    const { username, name, avatar_url } = user;
    return (
        <section>
            <img scr={avatar_url}></img>
            <h4>{username}</h4>
            <p>{name}</p>
        </section>
    )
}