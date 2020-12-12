import React from 'react'
import { Helmet } from 'react-helmet'

const Title = ({ title }) => {
    const defaultTitle = "100 days React UI challenge - by Vishnu Ram V"
    return (
        <Helmet>
            <title>{title ? `${title} of ${defaultTitle}` : defaultTitle}</title>
        </Helmet>
    )
}

export default Title
