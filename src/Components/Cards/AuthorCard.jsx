export const AuthorCard = ({user}) => {
    const {username, avatar_url} = user;
    return (
        <div className="author-card">
            <img className="author-image" src={avatar_url} />
            <h3>{username}</h3>
        </div>
    )
}