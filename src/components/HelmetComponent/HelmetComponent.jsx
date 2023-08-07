import React from 'react'
import { Helmet } from 'react-helmet'

const HelmetComponent = ({ title }) => {
    return (
        <Helmet>
            <title>Shoppuu - {title}</title>
        </Helmet>
    )
}

export default HelmetComponent
