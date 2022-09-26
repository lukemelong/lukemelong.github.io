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
const ScoreCard = ({ game, isDarkMode }) => {
    if(!game) return
    const {
        awayTeam,
        detail,
        downDistanceText,
        homeTeam,
        isRedZone,
    } = game
    // Styling for when a team is in the redzone (https://en.wikipedia.org/wiki/Red_zone_(gridiron_football))
    const redZoneColor = isDarkMode ? '#880808' : '#D22B2B'

    return (
        <Card
        sx={{
            bgcolor: isRedZone ? redZoneColor : '',
            color: isRedZone ? 'white' : '',
            width: 300,
        }}
        >
            <CardContent>
                <Grid 
                container
                alignItems="center"
                >
                    {/* Row 1: Game status (Upcoming, In progress, Final) */}
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
                    {/* Row 2: Away Team */}
                    <Grid item xs={4}>
                        <TeamLogo 
                        teamName={awayTeam.displayName}
                        src={awayTeam.logo}
                        />
                    </Grid>
                    <Grid item xs={8}>
                        <Typography>{awayTeam.score}</Typography>
                    </Grid>
                    {/* Row 3: Home Team */}
                    <Grid item xs={4}>
                        <TeamLogo 
                        teamName={homeTeam.displayName}
                        src={homeTeam.logo}
                        />
                    </Grid>
                    <Grid item xs={8}>
                        <Typography>{homeTeam.score}</Typography>
                    </Grid>
                    {/*  Row 4: Current down information */}
                    <Grid item>
                        <Typography>{downDistanceText ? downDistanceText : ''}</Typography>
                    </Grid>
                </Grid>
            </CardContent>

        </Card>
    )
}

export default ScoreCard