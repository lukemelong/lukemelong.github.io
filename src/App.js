// Main
import { useEffect, useState } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
// Components
import Container from '@mui/material/Container'
import ScoreCard from './components/ScoreCard'
import Stack from '@mui/material/Stack'
import Switch from '@mui/material/Switch'
// Utils
import { getGameData } from './utils'
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
// Testing
import testData from './mockData/broncos_9ers_inplay.json'

const App = () => {

  // Enable testing mode. Will use local TestingData. You can set testing data by importing a local json file
  const isTestMode = true

  // State
  const [loading, setLoading] = useState(false)
  const [gameData, setGameData] = useState()
  const [isDarkMode, setIsDarkMode] = useState(false)
  // Event listeners
  const darkModeSwitchOnChange= () => {
    setIsDarkMode(!isDarkMode)
  }
  // Effects
  // Get sports scores data (currently only for NFL games)
  useEffect(() => {
    setIsDarkMode(Boolean(localStorage.getItem('darkMode')))
    getGameData(setLoading, setGameData, testData, isTestMode)
  }, [isTestMode])
  // Set theme preference in localstorage
  useEffect(() => {
    localStorage.setItem('darkMode', '' + isDarkMode)
  }, [isDarkMode])
  
  // TODO Data isn't returned yet, need to make this prettier
  if(loading) {
    return (
      <h1>...Loading</h1>
    )
  }

  // Styles
  const theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
    },
  });
  const gameStackStyles = {
    flexWrap: "wrap",
    justifyContent: "center"
  }
  // Input Props
  const darkModeSwitchProps = {
    inputProps: {
      'aria-label': 'Dark Mode'
    }
  }

  return (
      <ThemeProvider
      theme={theme}
      >
        <CssBaseline />
        <Container
        maxWidth="xxl"
        >
          <Box>
            <Typography display="inline">Dark Mode</Typography>
            <Switch
            {...darkModeSwitchProps}
            onChange={darkModeSwitchOnChange}
            checked={isDarkMode}
            />
          </Box>
          <Stack
          direction="row"
          gap={2}
          sx={{...gameStackStyles}}
          >
            {gameData?.map(game =>
              (
                <ScoreCard
                game={game}
                isDarkMode={isDarkMode}
                key={game.id}
                />
              )
            )}
          </Stack>
        </Container>
      </ThemeProvider>
  );
}

export default App
