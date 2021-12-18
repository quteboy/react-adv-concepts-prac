import React, {useState, useEffect} from 'react';

const Challenge1 = () => {
    const [list, setList] = useState([])
    const [value, setValue] = useState('')
    const handleChange = (event) => {
        setValue(event.target.value)
    }
    const submitChange = () => {
        setList([...list, value])
        setValue('')
    }
    const deleteHandleChange = (item) => {
        setList(list.filter((ele) => ele != item))
    }
    return (
        <div>
            <input type="text" onChange={handleChange} value={value}/>
            <button onClick={submitChange}>Add Me</button>
            <hr/>
            <ul>
                {
                    list.map((item) => (
                        <li key={item} onClick={() => deleteHandleChange(item)}>
                            {item}
                        </li>
                    ))
                }
            </ul>

        </div>
    );
};

export default Challenge1;