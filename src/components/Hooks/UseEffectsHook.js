import React, {useEffect, useState} from 'react';
import axios from "axios";

const UseEffectsHook = () => {
    const [userData, setUserData] = useState([])
    const [count, setCount] = useState(0)
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then((response) => {
                setUserData(response.data[8].email)
                console.log('API was fired --->', response.data[8].email)
            })
    }, [count]) /// dont put anything unless its required
    return (
        <div>
            Hello from UseEffects{userData}
            <br/>
            <button onClick={() => {
                setCount(count + 1)
            }}>Add Me</button>
        </div>
    );
};

export default UseEffectsHook;