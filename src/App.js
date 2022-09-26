// Main
import { useEffect, useState } from 'react'
import axios from 'axios'
// Components
import ScoreCard from './components/ScoreCard'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'

// Css
import './App.css'

const App = () => {

  const [loading, setLoading] = useState(false)
  const [scoreData, setScoreData] = useState()

  useEffect(() => {
    const getScores = async () => {
      setLoading(true)
      const url = 'https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard'
      const request = await axios.get(url)
      setScoreData(request.data)
      setLoading(false)
    }
    getScores()
  }, [])

  // TODO Data isn't returned yet, need to make this prettier
  if(loading) {
    return (
      <h1>...Loading</h1>
    )
  }
  return (
    <div className="App">
      <Container
      maxWidth="lg"
      >
        <Stack
        direction="row"
        gap={2}
        sx={{
          flexWrap: "wrap",
          justifyContent: "center"
        }}
        >
          {scoreData?.events?.map(score => 
            (
              <ScoreCard event={score}/>
            )
          )}
        </Stack>
      </Container>
    </div>
  );
}

export default App
