import { Box } from '@mui/system'
import { LoadingSpinnerContainer, LoadingSpinnerxChildren } from './Loading/LoadingStyled'

const Loading = ({ isDarkMode }) => {
    return (
        <LoadingSpinnerContainer>
            <LoadingSpinnerxChildren isDarkMode={isDarkMode}><div></div><div></div><div></div><div></div></LoadingSpinnerxChildren>
        </LoadingSpinnerContainer>
    )
}

export default Loading