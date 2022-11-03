import { useEffect, useState } from 'react'
import * as API from '../../Api'

const Login = () => {
    const [users, setUsers] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        API.fetchUsers()
        .then(({users}) => {
            setIsLoading(false);
            setUsers(users);
        })
    },[])

    return (
        <section>
            
        </section>
    )
}