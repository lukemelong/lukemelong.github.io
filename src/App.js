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
import { getScoreData } from './utils'
import { dark } from '@mui/material/styles/createPalette';
import { Box } from '@mui/system';
import { Grid, Typography } from '@mui/material';

const App = () => {
  // Styles
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  const lightTheme = createTheme({
      palette: {
        mode: 'light',
      },
  })
  // State
  const [loading, setLoading] = useState(false)
  const [scoreData, setScoreData] = useState()
  const [isDarkMode, setIsDarkMode] = useState(false)
  // Input Props
  const darkModeSwitchProps = {
    inputProps: {
      'aria-label': 'Dark Mode'
    }
  }
  // Event listeners
  const darkModeSwitchOnClick = () => {
    setIsDarkMode(!isDarkMode)
  }
  // Effects
  // Get sports scores data (currently only for NFL games)
  useEffect(() => {
    setIsDarkMode(localStorage.getItem('darkMode'))
    getScoreData(setLoading, setScoreData)
  }, [])
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

  return (
      <ThemeProvider
      theme={isDarkMode ? darkTheme  : lightTheme}
      >
        <CssBaseline />
        <Container
        maxWidth="lg"
        >
          <Box>
            <Typography display="inline">Dark Mode</Typography>
            <Switch
            {...darkModeSwitchProps}
            onClick={darkModeSwitchOnClick}
            defaultChecked={isDarkMode}
            />
          </Box>
          <Stack
          direction="row"
          gap={2}
          sx={{
            flexWrap: "wrap",
            justifyContent: "center"
          }}
          >
            {scoreData?.map(game => 
              (
                <ScoreCard
                game={game}
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
