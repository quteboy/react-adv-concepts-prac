import React, {useContext} from 'react';
import {AppContext} from "../components/Hooks/UseContextHook";

const User = (props) => {
    const {userName} = useContext(AppContext)
    return (
        <div>
            <h1>User:{userName}</h1>
        </div>
    );
};

export default User;