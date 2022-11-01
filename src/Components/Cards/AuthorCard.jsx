export const AuthorCard = ({user}) => {
    const {username, avatar_url} = user;
    return (
        <div>
            <img src={avatar_url} />
            <h3>{username}</h3>
        </div>
    )
}