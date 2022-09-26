// Components
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import TeamLogo from './TeamLogo'
import Typography from '@mui/material/Typography'

/**
 * ScoreCard shows the score for one sports game
 * 
 * @param {Object} game The data related to one sports game
 * @returns 
 */
const ScoreCard = ({ game }) => {
    if(!game) return
    const homeTeam = game.competitions[0].competitors[0]
    const awayTeam = game.competitions[0].competitors[1]

    return (
        <Card
        sx={{
            maxWidth: 450,
            minWidth: 300
        }}
        >
            <CardContent>
                <Grid 
                container
                alignItems="center"
                >
                    <Grid item xs={4}>
                        <TeamLogo 
                        teamName={awayTeam.team.displayName}
                        src={awayTeam.team.logo}
                        />
                    </Grid>
                    <Grid item xs={8}>
                        <Typography>{awayTeam.score}</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <TeamLogo 
                        teamName={homeTeam.team.displayName}
                        src={homeTeam.team.logo}
                        />
                    </Grid>
                    <Grid item xs={8}>
                        <Typography>{homeTeam.score}</Typography>
                    </Grid>
                </Grid>
            </CardContent>

        </Card>
    )
}

export default ScoreCard