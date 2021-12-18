import React, {useContext} from 'react';
import {AppContext} from "../components/Hooks/UseContextHook";

const Login = () => {
    const {setUserName} = useContext(AppContext)
    return (
        <div>
            <input onChange={(event) => {
                setUserName(event.target.value)
            }} type="text"/>
        </div>
    );
};

export default Login;