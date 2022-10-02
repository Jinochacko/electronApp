import * as React from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
    selectIsFetching,
    doLogin,
    loginSuccess
} from './Slice';
import {socialMediaAuth} from './service';
import LoginForm from '../../Components/Login/Form';
import { Providers } from '../../config/firebase';

const Login: React.FC = () => {
    const dispatch = useAppDispatch();
    const isLogging = useAppSelector(selectIsFetching);
    const login = () => {
        dispatch(doLogin());
    }

    const handleLogin = async (provider: any) => {
        const response = await socialMediaAuth(provider);
        console.log(response);
        if(response.user){
            dispatch(loginSuccess(true));
        }
    }
    
    return (<div>
        {isLogging && <div>Logging in..</div>}
        <LoginForm login={login} />
        <button type="button" onClick={()=>{handleLogin(Providers.facebook)}}>Facebook</button>
        <button type="button" onClick={()=>{handleLogin(Providers.google)}}>Google</button>
    </div>);
}

export default Login;
