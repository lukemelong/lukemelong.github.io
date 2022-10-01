import { ReactComponent as ErrorIcon } from '../../Images/dead.svg'
import React from 'react'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { createSvgIcon } from '@mui/material'

export const ErrIcon = ({isDarkMode}) => {
    const style = {
        fill: isDarkMode ? 'white' : 'black',
        width: '20%'
    }

    return <ErrorIcon style={style}/>
}

export const ErrorContainer = ({children, ...props}) => {
    const style = {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }

    return <Stack sx={style} {...props}>{children}</Stack>
}

export const ErrorMessage = ({children}) => {
    const style = {
        fontSize: '1.6vw'
    }

    return <Typography sx={style}>{children}</Typography>
}