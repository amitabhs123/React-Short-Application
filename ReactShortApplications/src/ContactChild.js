import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import userData from './ContextCreation'

export default function ContactChild ({value}) {
    console.log('inside child', value)

    // Fetching context data
    const data = useContext(userData)
    return (
        <div>
         <h4>Hello {value}</h4>
         <label>{data.name}</label>
        </div>
    )
}

ContactChild.propTypes = {
    value: PropTypes.string
}

ContactChild.defaultProps = {
    value: "Stranger",
}