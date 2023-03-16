import React from 'react';

export default function CurryingExample (){


    function curryingfunc(a) {
        return function (b) {
            return function(c){
                return a+b+c;
            }
        }
    }

    const data = (a,b,c) => curryingfunc(a,b,c)
    // console.log('data', data)

    return (
        <React.Fragment>
        {/* we used Fragement when we want more than one parents */}
        <h3>The data is {data(1)(2)(5)}</h3>
        <h3>The data is {curryingfunc(1)(2)(5)}</h3>
        </React.Fragment>
    )
}