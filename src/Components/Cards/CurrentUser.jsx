import { UserContext } from "../../Context/UserContext"
import { useContext } from "react"
import { useNavigate } from 'react-router-dom'

export const CurrentUser = () => {
    const { currentUser } = useContext(UserContext)
    const navigate = useNavigate();

    if(currentUser === null) navigate('/')
    else{
        const { avatar_url } = currentUser;
        return <img className="current-user-image" src={avatar_url} />
    }
}