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
    const {
        awayTeam,
        detail,
        homeTeam,
    } = game

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
                    <Grid item xs={8}>
                        <Typography
                        align='left'
                        >
                            {detail}
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography>
                            {}
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <TeamLogo 
                        teamName={awayTeam.displayName}
                        src={awayTeam.logo}
                        />
                    </Grid>
                    <Grid item xs={8}>
                        <Typography>{awayTeam.score}</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <TeamLogo 
                        teamName={homeTeam.displayName}
                        src={homeTeam.logo}
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