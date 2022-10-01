import {
    ErrIcon,
    ErrorContainer,
    ErrorMessage
} from './Error/ErrorStyled'
import React from 'react'

const Error = ({error, isDarkMode}) => {
    return (
        <ErrorContainer
        direction='column'
        gap={2}
        >
            <ErrIcon isDarkMode={isDarkMode}/>
            <ErrorMessage>{'Something went wrong! Maybe give it a good ol\' refresh'}</ErrorMessage>
        </ErrorContainer>
    )
}

export default Error