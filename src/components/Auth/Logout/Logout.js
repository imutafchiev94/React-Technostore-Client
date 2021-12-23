import { useNavigate } from 'react-router-dom';

import * as authService from '../../../services/authService';
import { useAuthContext } from '../../../context/AuthContext';
import { useEffect } from 'react';

const Logout = () => {
    const navigate = useNavigate();
    const { user, logout } = useAuthContext();
    
    useEffect(() => {
        console.log(user);
        authService.logout()
            .then((result) => {
                console.log(result)
                logout();
                navigate('/');
            }).catch(err => {
                console.error(err);
            })
    }, [])

    return null;
};

export default Logout;