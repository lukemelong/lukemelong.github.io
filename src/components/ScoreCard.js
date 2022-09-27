// Components
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Container from '@mui/material/Container'
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
const ScoreCard = ({ game, isDarkMode, scale }) => {
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

    const cardStyles = {
        bgcolor: isRedZone ? redZoneColor : '',
        color: isRedZone ? 'white' : '',
        width: 300 * scale,
    }
    const timerStyles = {
        fontSize: 12 * scale,
        marginBottom: 1 * scale,
        minHeight: 14 * scale
    }
    const downDistanceStyles = {
        ...timerStyles,
        marginTop: 1 * scale,
        marginBottom: 0,
        minHeight: 14 * scale,
    }
    const possessionIconStyles = {
        width: 15 * scale,
        marginLeft: 2 * scale
    }
    const scoreFontStyles = {
        textAlign: 'right'
    }
    const awayTeamStyles = {
        fontWeight: gameCompleted && awayTeam.winner && 'bold'
    }
    const homeTeamStyles = {
        fontWeight: gameCompleted && homeTeam.winner && 'bold'
    }


    return (
        <Card sx={{...cardStyles}}>
            <CardContent>
                <Grid
                container
                alignItems="center"
                >
                    {/* Row 1: Game status (Upcoming, In progress, Final) */}
                    <Grid item xs={12}>
                        <Typography sx={{...timerStyles}}>{gameDetail}</Typography>
                    </Grid>
                    {/* Row 2: Away Team */}
                    <Grid item xs={2}>
                        <TeamLogo
                        teamName={awayTeam.displayName}
                        src={awayTeam.logo}
                        scale={scale}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        {displayPossession && !teamPossession && <SportsFootballIcon sx={{...possessionIconStyles}} />}
                    </Grid>
                    <Grid item xs={4}>
                        <Typography fontWeight={awayTeam.winner && 'bold'}>{awayTeam.name}</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography sx={{...scoreFontStyles}} fontWeight={awayTeam.winner && 'bold'}>{awayTeam.score}</Typography>
                    </Grid>
                    {/* Row 3: Home Team */}
                    <Grid item xs={2}>
                        <TeamLogo
                        teamName={homeTeam.displayName}
                        src={homeTeam.logo}
                        scale={scale}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        {displayPossession && teamPossession && <SportsFootballIcon sx={{...possessionIconStyles}} />}
                    </Grid>
                    <Grid item xs={4}>
                        <Typography fontWeight={homeTeam.winner && 'bold'}>{homeTeam.name}</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography sx={{...scoreFontStyles}} fontWeight={homeTeam.winner && 'bold'}>{homeTeam.score}</Typography>
                    </Grid>
                    {/*  Row 4: Current down information */}
                    <Grid item xs={12}>
                        <Typography sx={{...downDistanceStyles}}>{downDistanceText ? downDistanceText : ''}</Typography>
                    </Grid>
                </Grid>
            </CardContent>

        </Card>
    )
}

export default ScoreCard