import React, {useState} from 'react';

const UseStateHook = () => {
    const [count, setCount] = useState(0)
    const [inputValue,setInputValue] = useState('Pedro')
    let onChangeText = (event) =>{
        let newValue = event.target.value
         setInputValue(newValue)
    }
    const increaseCount = (prevState) => {
        setCount(prevState = count + 1)
    }
    const decreaseCount = (prevState) => {
        setCount(prevState = count - 1)
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increaseCount}>Add Me</button>
            <button onClick={decreaseCount}>Delete Me</button>
            <br/>
            <input onChange={onChangeText} type="text" placeholder='Type Here'/>
            <br/>
            {inputValue}
        </div>
    );
};

export default UseStateHook;