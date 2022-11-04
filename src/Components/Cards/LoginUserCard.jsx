export const LoginUserCard = ({user}) => {
    const { username, name, avatar_url } = user;
    return (
        <section className="login-card">
            <img className="login-user-img" src={avatar_url} />
            <h4>{username}</h4>
            <p>{name}</p>
        </section>
    )
}