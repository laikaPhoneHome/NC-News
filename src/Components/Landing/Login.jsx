import { useEffect, useState } from 'react'
import * as API from '../../Api'
import { LoginUserCard } from '../Cards/LoginUserCard';
import { Link } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';

export const Login = () => {
    const [users, setUsers] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { user, setUser } = UserContext();

    useEffect(() => {
        setIsLoading(true);
        API.fetchUsers()
        .then(({users}) => {
            setIsLoading(false);
            setUsers(users);
        })
    },[])

    isLoading ? <h2 className='user-feedback'>...</h2>
    :   (
        <section>
            {users.map(user => {
                <Link to="/Articles">
                    <LoginUserCard onClick={() => setUsers(user)} user={user} />
                </Link>
            })
        }
            
        </section>
    )
}