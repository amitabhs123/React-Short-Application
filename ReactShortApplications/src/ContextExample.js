import React, { Fragment } from 'react';
import ContactChild from './ContactChild';
import userData from './ContextCreation'

// (Q)If a file have multiple export funtion so how we import the other's func

export default function ContextExample() {
    
    return (
        <Fragment>
            <userData.Provider value={{id: 2, name: 'Amii'}}>
            <div>
                <title>Hello</title>
                <ContactChild />
            </div>
            </userData.Provider>
        </Fragment>
    )
}