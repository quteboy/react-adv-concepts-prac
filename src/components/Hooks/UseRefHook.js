import React,{useRef} from 'react';

const UseRefHook = () => {
    const inputRef = useRef(null)
    const onToggle = () =>{
       inputRef.current.focus()
    }
    return (
        <div>
            <h2>GrindleWorld</h2>
            <input placeholder='Text Goes Here' type="text" ref={inputRef}/>
            <button onClick={onToggle}>Button is Here</button>
        </div>
    );
};

export default UseRefHook;