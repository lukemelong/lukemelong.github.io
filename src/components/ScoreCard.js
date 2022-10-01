// Components
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack';
import {
    DownInfo,
    PossessionIcon,
    Record,
    Score,
    ScoreCardContainer,
    TeamLogo,
    TeamName,
    Timer
} from './ScoreCard/ScoreCardStyled'

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
    // Who has possession of the football. false is the away team, true is the home team
    const teamPossession = awayTeam.id === possession ? false : true
    const displayPossession = !gameCompleted && gameState !== "pre"

    return (
        <ScoreCardContainer
        isDarkMode={isDarkMode}
        isRedZone={isRedZone}
        scale={scale}
        >
            <CardContent>
                <Grid
                container
                alignItems="center"
                >
                    {/* Row 1: Game status (Upcoming, In progress, Final) */}
                    <Grid item xs={12}>
                        <Timer
                        scale={scale}
                        >
                            {gameDetail}
                        </Timer>
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
                        {displayPossession && !teamPossession && <PossessionIcon scale={scale}/>}
                    </Grid>
                    <Grid item xs={4}>
                        <Stack>
                            <TeamName winner={awayTeam.winner}>{awayTeam.name}</TeamName>
                            <Record>{awayTeam.record}</Record>
                        </Stack>
                    </Grid>
                    <Grid item xs={4}>
                        <Score
                        winner={awayTeam.winner}
                        >
                            {awayTeam.score}
                        </Score>
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
                        {displayPossession && teamPossession && <PossessionIcon scale={scale}/>}
                    </Grid>
                    <Grid item xs={4}>
                        <Stack>
                            <TeamName winner={homeTeam.winner}>{homeTeam.name}</TeamName>
                            <Record>{homeTeam.record}</Record>
                        </Stack>
                    </Grid>
                    <Grid item xs={4}>
                        <Score winner={homeTeam.winner}>{homeTeam.score}</Score>
                    </Grid>
                    {/*  Row 4: Current down information */}
                    <Grid item xs={12}>
                        <DownInfo scale={scale}>{downDistanceText}</DownInfo>
                    </Grid>
                </Grid>
            </CardContent>

        </ScoreCardContainer>
    )
}

export default ScoreCard