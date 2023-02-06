import { ThemeProvider, createTheme } from '@mui/material/styles'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import MenuItem from '@mui/material/MenuItem'
import React from 'react'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

export const DarkModeLabel = ({children}) => {
    const style = {
        display: 'inline',
        fontSize: 14
    }

    return <Typography sx={style}>{children}</Typography>
}
export const GameStack = ({children, ...props}) => {
    const style = {
        flexWrap: 'wrap',
        justifyContent: 'center'
    }

    return <Stack sx={style} {...props}>{children}</Stack>
}

export const MainContainer = ({children, error, ...props}) => {
    const style = {
        marginTop: error ? '' : 2
    }

    return <Container sx={style} {...props}>{children}</Container>
}

export const MenuItemSlider = ({children}) => {
    const style = {
        width: 300
    }

    return <MenuItem sx={style}>{children}</MenuItem>
}

export const SettingsButton = ({children, ...props}) => {
    const style = {
        fontSize: 14
    }

    return <Button sx={style} {...props}>{children}</Button>
}

export const ScaleSliderContainer = ({children, ...props}) => {
    const style = {
        width: '100%'
    }

    return <Stack sx={style} {...props}>{children}</Stack>
}

export const ScaleSliderLabel = ({children}) => {
    const style = {
        fontSize: 14,
        display: 'inline'
    }

    return <Typography sx={style}>{children}</Typography>
}

export const ThemeWrapper = ({children, isDarkMode, scale}) => {

    const theme = createTheme({
        palette: {
            mode: isDarkMode ? 'dark' : 'light',
        },
        typography: {
            fontSize: 18 * scale,
        }
    })

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            {children}
        </ThemeProvider>
    )
}