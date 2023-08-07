import React from 'react'
import { Helmet } from 'react-helmet'

const HelmetComponent = ({ title }) => {
    return (
        <Helmet>
            <title>SHOPPUU - {title}</title>
        </Helmet>
    )
}

export default HelmetComponent
