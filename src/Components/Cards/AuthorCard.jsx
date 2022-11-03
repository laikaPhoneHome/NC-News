export const AuthorCard = ({user}) => {
    const {username, avatar_url} = user;
    return (
        <div className="author-card">
            <h2>{username}</h2>
            <img className="author-image" src={avatar_url} />
        </div>
    )
}