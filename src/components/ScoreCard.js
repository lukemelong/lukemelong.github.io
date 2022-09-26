// Components
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import SportsFootballIcon from '@mui/icons-material/SportsFootball';
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
        gameCompleted,
        gameDetail,
        gameState,
        downDistanceText,
        homeTeam,
        isRedZone,
        possession,
    } = game
    // Styling for when a team is in the redzone (https://en.wikipedia.org/wiki/Red_zone_(gridiron_football))
    const redZoneColor = isDarkMode ? '#880808' : '#D22B2B'
    // Who has possession of the football. false is the away team, true is the home team
    const teamPossession = awayTeam.id === possession ? false : true
    const displayPossession = !gameCompleted && gameState !== "pre"
    // Stylings
    const possessionIconStyles = {
        width: 15,
        marginLeft: 2
    }
    const timerStyles = {
        fontSize: '0.8rem'
    }
    const cardStyles = {
        bgcolor: isRedZone ? redZoneColor : '',
        color: isRedZone ? 'white' : '',
        width: 300,
    }

    return (
        <Card sx={{...cardStyles}}>
            <CardContent>
                <Grid
                container
                alignItems="center"
                >
                    {/* Row 1: Game status (Upcoming, In progress, Final) */}
                    <Grid item xs={8}>
                        <Typography sx={{...timerStyles}}>{gameDetail}</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography>
                            {}
                        </Typography>
                    </Grid>
                    {/* Row 2: Away Team */}
                    <Grid item xs={2}>
                        <TeamLogo
                        teamName={awayTeam.displayName}
                        src={awayTeam.logo}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        {displayPossession && !teamPossession && <SportsFootballIcon sx={{...possessionIconStyles}} />}
                    </Grid>
                    <Grid item xs={8}>
                        <Typography>{awayTeam.score}</Typography>
                    </Grid>
                    {/* Row 3: Home Team */}
                    <Grid item xs={2}>
                        <TeamLogo
                        teamName={homeTeam.displayName}
                        src={homeTeam.logo}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        {displayPossession && teamPossession && <SportsFootballIcon sx={{...possessionIconStyles}} />}
                    </Grid>
                    <Grid item xs={8}>
                        <Typography>{homeTeam.score}</Typography>
                    </Grid>
                    {/*  Row 4: Current down information */}
                    <Grid item>
                        <Typography sx={{...timerStyles}}>{downDistanceText ? downDistanceText : ''}</Typography>
                    </Grid>
                </Grid>
            </CardContent>

        </Card>
    )
}

export default ScoreCard