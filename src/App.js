// Main
import { useEffect, useState } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
// Components
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Loading from './components/Loading'
import ScoreCard from './components/ScoreCard'
import Slider from '@mui/material/Slider'
import Stack from '@mui/material/Stack'
import Switch from '@mui/material/Switch'
import Typography from '@mui/material/Typography'
// Utils
import { getGameData } from './utils'
// Testing
import testData from './mockData/broncos_9ers_inplay.json'

const App = () => {

  // Enable testing mode. Will use local TestingData. You can set testing data by importing a local json file
  const isTestMode = false

  // State
  const [loading, setLoading] = useState(false)
  const [gameData, setGameData] = useState()
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [scale, setScale] = useState(1)
  // Event listeners
  const darkModeSwitchOnChange= () => {
    setIsDarkMode(!isDarkMode)
  }
  const scaleOnChange = (e, newValue) => {
    setScale(newValue)
  }
  // Refresh callback
  const refreshGameData = () => {
    getGameData(setLoading, false, setGameData, testData, isTestMode)
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
  // Set app scale based on screen width
  useEffect(() => {
    if(window.innerWidth > 1536) setScale(1.3)
    else setScale(1)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.innerWidth])


  // Styles
  const theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
    },
    typography: {
      fontSize: 14 * scale,
    }
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
        sx={{ marginTop: 2}}
        >
          {
          loading ?
          <Loading
          isDarkMode={isDarkMode}
          /> :
          <>
            <Grid
            container
            spacing={4}
            >
              <Grid item xs={4}>
                  <Typography display="inline">Dark Mode</Typography>
                  <Switch
                  {...darkModeSwitchProps}
                  onChange={darkModeSwitchOnChange}
                  checked={isDarkMode}
                  />
              </Grid>
              <Grid item xs={8}>
                <Stack
                direction="row"
                spacing={2}
                >
                  <Typography display="inline">Scale</Typography>
                  <Slider
                  onChange={scaleOnChange}
                  step={0.01}
                  min={0.8}
                  max={2}
                  value={scale}
                  ></Slider>
                </Stack>

              </Grid>
              <Grid item xs={12}>
                <Stack
                direction="row"
                gap={2}
                sx={{...gameStackStyles}}
                >
                  {gameData?.map(game =>
                    (
                      <ScoreCard
                      key={game.id}
                      game={game}
                      isDarkMode={isDarkMode}
                      scale={scale}
                      />
                    )
                  )}
                </Stack>
              </Grid>
            </Grid>
          </>
        }
        </Container>
      </ThemeProvider>
  );
}

export default App
