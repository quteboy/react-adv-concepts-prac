import React, {useState, createContext} from 'react';
import Login from "../../containers/Login";
import User from "../../containers/User";

export const AppContext = createContext(null) /// collection state or information available for entire App
const UseContextHook = () => {
    const [userName, setUserName] = useState('')
    return (
        <AppContext.Provider value={{userName, setUserName}}>
            <Login setUserName={setUserName}/>
            <User userName={userName}/>
        </AppContext.Provider>
    );
};

export default UseContextHook;