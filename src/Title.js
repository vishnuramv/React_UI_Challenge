import React from 'react'
import { Helmet } from 'react-helmet'

const Title = ({ title }) => {
    const defaultTitle = "React UI challenge - by Vishnu Ram V"
    return (
        <Helmet>
            <title>{title ? `${title} - ${defaultTitle}` : defaultTitle}</title>
        </Helmet>
    )
}

export default Title
