import { useEffect, useState } from 'react'
import * as API from '../../Api'
import { LoginUserCard } from '../Cards/LoginUserCard';
import { Link } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';
import { useContext } from 'react';

export const Login = () => {
    const [users, setUsers] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { currentUser, setCurrentUser } = useContext(UserContext);

    useEffect(() => {
        setIsLoading(true);
        API.fetchUsers()
        .then(({users}) => {
            setIsLoading(false);
            setUsers([users[3]]);
        })
    },[])

    if(isLoading) return <h2 className='user-feedback'>...</h2>
    else
    return (
        <main>
                <h2 className="login-title">NC Leaks</h2>
            <h1 className='user-login'>Greetings Human</h1>
            <h3>Is this you?</h3>
            {users.map(user => {
                return <Link key={user.user_id} onClick={() => setCurrentUser(user)} key={user.username} to="/articles">
                    <LoginUserCard user={user} />
                </Link>
            })
        }
        </main>
    )
}