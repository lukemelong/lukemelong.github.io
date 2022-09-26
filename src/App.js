// Main
import { useEffect, useState } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
// Components
import Container from '@mui/material/Container'
import Loading from './components/Loading';
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
  const isTestMode = false

  // State
  const [loading, setLoading] = useState(true)
  const [gameData, setGameData] = useState()
  const [isDarkMode, setIsDarkMode] = useState(false)
  // Event listeners
  const darkModeSwitchOnChange= () => {
    setIsDarkMode(!isDarkMode)
  }
  // Refresh callback
  const refreshGameData = () => {
    getGameData(setLoading, false, setGameData, testData, isTestMode)
    console.log("Got new game data")
  }
  // Effects
  // Get sports scores data (currently only for NFL games)
  useEffect(() => {
    if(localStorage.getItem('darkMode') === 'true'){
      setIsDarkMode(true)
    }
    getGameData(setLoading, true, setGameData, testData, isTestMode)
    const refreshInterval = setInterval(refreshGameData, 5000)
    return () => clearTimeout(refreshInterval)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  // Set theme preference in localstorage
  useEffect(() => {
    localStorage.setItem('darkMode', '' + isDarkMode)
  }, [isDarkMode])

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
          {
          loading ?
          <Loading
          isDarkMode={isDarkMode}
          /> :
          <>
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
          </>
        }
        </Container>
      </ThemeProvider>
  );
}

export default App
