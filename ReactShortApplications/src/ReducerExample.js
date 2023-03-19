import React, { Fragment, useReducer } from 'react';

// It hold state and action. That action are add/changed in dispatch types
function reducer(state, action) {
    if(action.type === 'Increment_Number'){
        return {
            count: state.count + 1
        }
    } else if (action.type === 'Decrement_Number') {
        return {
            count: state.count - 1
        }
    }else {
        throw Error('Unknown activities')
    }

}

export default function ReducerExample() {
    // useReducer(reducer, initialArg, init?) and it return current state and dispatch method
    const [state, dispatch] = useReducer(reducer, {count: 1})
    return (
        <Fragment>
            <div>
                <p>The number is {state.count}</p>
                <button onClick={() => {dispatch({type: 'Increment_Number'})}}>
                    Click to Add by 1
                </button>
                <button onClick={() => dispatch({type: 'Decrement_Number'})}>
                    Click to Subtract by 1
                </button>
            </div>
        </Fragment>
    )
}