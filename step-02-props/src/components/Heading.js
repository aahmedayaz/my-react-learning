import React from 'react'
import PropTypes from 'prop-types'
import './heading.css'
import Subheading from './Subheading'

const Heading = (props) => {
    return (
        <>
            <h1 className='heading1'>Heading Value is {props.value}</h1>
            <Subheading value = '1'/>
        </>
    )
}

Heading.propTypes = {
    value : PropTypes.string
}

Heading.defaultProps = {
    value : 'Anonymous'
}

export default Heading;