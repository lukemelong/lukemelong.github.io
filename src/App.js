
// Main
import React, { useEffect, useState } from 'react'
// Components
// eslint-disable-next-line sort-imports
import {
  DarkModeLabel,
  GameStack,
  MainContainer,
  MenuItemSlider,
  ScaleSliderContainer,
  ScaleSliderLabel,
  SettingsButton,
  ThemeWrapper,
} from './components/App/AppStyled'
import Grid from '@mui/material/Grid'
import Loading from './components/Loading'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ScoreCard from './components/ScoreCard'
import Slider from '@mui/material/Slider'
import Switch from '@mui/material/Switch'
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
  const [menuAnchorEl, setMenuAnchorEl] = useState(null)
  const [scale, setScale] = useState(1)
  const menuOpen = Boolean(menuAnchorEl)
  // Event listeners
  const darkModeSwitchOnChange= () => {
    setIsDarkMode(!isDarkMode)
  }
  const menuOnClose = () => {
    setMenuAnchorEl(null)
  }
  const menuOnOpen = (e) => {
    setMenuAnchorEl(e.currentTarget)
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
    const refreshInterval = setInterval(refreshGameData, 10000)
    return () => clearTimeout(refreshInterval)
  }, [])
  // Set theme preference in localstorage
  useEffect(() => {
    localStorage.setItem('darkMode', '' + isDarkMode)
  }, [isDarkMode])
  // Set app scale based on screen width
  useEffect(() => {
    if(window.innerWidth > 1536) setScale(1.3)
    else setScale(1)
  }, [window.innerWidth])

  // Input Props
  const darkModeSwitchProps = {
    inputProps: {
      'aria-label': 'Dark Mode'
    }
  }

  return (
      <ThemeWrapper
      isDarkMode={isDarkMode}
      scale={scale}
      >
        <MainContainer
        maxWidth="xxl"
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
              <Grid item xs={2}>
                <SettingsButton
                  aria-controls={menuOpen ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={menuOpen ? 'true' : undefined}
                  onClick={menuOnOpen}
                >
                  Settings
                </SettingsButton>
                <Menu
                anchorEl={menuAnchorEl}
                open={menuOpen}
                onClose={menuOnClose}
                >
                  <MenuItem>
                    <DarkModeLabel>Dark Mode</DarkModeLabel>
                    <Switch
                    {...darkModeSwitchProps}
                    onChange={darkModeSwitchOnChange}
                    checked={isDarkMode}
                    />
                  </MenuItem>
                  <MenuItemSlider>
                    <ScaleSliderContainer
                    direction="row"
                    spacing={2}
                    >
                      <ScaleSliderLabel>Scale</ScaleSliderLabel>
                      <Slider
                      onChange={scaleOnChange}
                      step={0.01}
                      min={0.8}
                      max={3}
                      value={scale}
                      ></Slider>
                    </ScaleSliderContainer>
                  </MenuItemSlider>
                </Menu>
              </Grid>
              <Grid item xs={12}>
                <GameStack
                direction="row"
                gap={2}
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
                </GameStack>
              </Grid>
            </Grid>
          </>
        }
        </MainContainer>
      </ThemeWrapper>
  )
}

export default App
