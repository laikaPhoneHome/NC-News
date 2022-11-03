export const CurrentUser = ({user}) => {
    const { avatar_url } = user;
    return <img src={avatar_url}/>
}