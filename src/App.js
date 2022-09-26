// Main
import { useEffect, useState } from 'react'
// Components
import Container from '@mui/material/Container'
import ScoreCard from './components/ScoreCard'
import Stack from '@mui/material/Stack'
// Utils
import { getScoreData } from './utils'

const App = () => {

  const [loading, setLoading] = useState(false)
  const [scoreData, setScoreData] = useState()

  useEffect(() => {
    getScoreData(setLoading, setScoreData)
  }, [])

  // TODO Data isn't returned yet, need to make this prettier
  if(loading) {
    return (
      <h1>...Loading</h1>
    )
  }

  return (
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
  );
}

export default App
