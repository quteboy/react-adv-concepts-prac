import React, {useReducer} from 'react';

const randomReducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {count: state.count + 1, showText: state.showText}
        case "TOGGLESHOWTEXT":
            return {count: state.count + 1, showText: !state.showText}
        default:
            return state
    }
}
const numberReducer = (numberState, action) => {
    switch (action.type) {
        case "Increase":
            return {numberCount: numberState.numberCount + 1}
        case "Decrease":
            return {numberCount: numberState.numberCount - 1}
    }
}
const UseReducerHook = () => {
    const [state, dispatch] = useReducer(randomReducer, {count: 0, showText: true})
    const [numberState, numberDispatch] = useReducer(numberReducer, {numberCount: 0})

    return (
        <div>
            <h1>{state.count}</h1>
            <button onClick={() => {
                dispatch({type: 'INCREMENT'})
                dispatch({type: 'TOGGLESHOWTEXT'})
            }}>
                Toggle Actions
            </button>
            {state.showText && <h5>This Works</h5>}

            <h1>{numberState.numberCount}</h1>
            <button onClick={() => {
                numberDispatch({type: 'Increase'})
            }}>Increase
            </button>
            <button onClick={() => {
                numberDispatch({type: 'Decrease'})
            }}>Decrease</button>
        </div>
    );
};

export default UseReducerHook;