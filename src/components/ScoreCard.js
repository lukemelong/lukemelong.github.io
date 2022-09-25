// Components
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import TeamLogo from './TeamLogo'
import Typography from '@mui/material/Typography'


const ScoreCard = ({ event }) => {
    if(!event) return
    const homeTeam = event.competitions[0].competitors[0]
    const awayTeam = event.competitions[0].competitors[1]
    console.log(homeTeam.team.logo)

    return (
        <Card
        sx={{
            maxWidth: 450,
            minWidth: 300
        }}
        >
            <CardContent>
                <Grid container>
                    <Grid item xs={4}>
                        {/* Home team logo  */}
                        <TeamLogo 
                        teamName={homeTeam.team.displayName}
                        src={homeTeam.team.logo}
                        />
                    </Grid>
                    <Grid item xs={8}>
                        {/* Home Team Score */}
                        <Typography>{homeTeam.score}</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        {/* Away Team Logo */}
                        <TeamLogo 
                        teamName={awayTeam.team.displayName}
                        src={awayTeam.team.logo}
                        />
                    </Grid>
                    <Grid item xs={8}>
                        {/* Away Team Score */}
                        <Typography>{awayTeam.score}</Typography>
                    </Grid>
                </Grid>
            </CardContent>

        </Card>
    )
}

export default ScoreCard