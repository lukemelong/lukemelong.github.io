import Box from "@mui/material/Box"
import { LoadingSpinner } from '../css/LoadingSpinner'

const Loading = ({ isDarkMode }) => {
    const loadingContainerStyles = {
        display: 'flex',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center'
    }

    return (
        <Box sx={{ ...loadingContainerStyles }}>
            <LoadingSpinner isDarkMode={isDarkMode}><div></div><div></div><div></div><div></div></LoadingSpinner>
        </Box>
    )
}

export default Loading