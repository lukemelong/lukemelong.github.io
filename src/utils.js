import axios from 'axios'

/**
 * Takes in raw API data and formats it for display
 *
 * @param {Array} games The raw data returned from the api
 * @returns An array with formatted game data for each game that day
 */
 const formatGameData = (games) => {
    return  games.events.map(game => {
        const competition = game.competitions[0]
        const id = competition.id
        const homeTeam = competition.competitors[0]
        const awayTeam = competition.competitors[1]
        const situation = competition.situation
        const downDistanceText = competition?.situation?.downDistanceText
        const isRedZone = situation?.isRedZone
        const possession = situation?.possession
        const {
            status: {
                type: {
                    completed: gameCompleted,
                    detail: gameDetail,
                    state: gameState,
                }
            }
        } = competition

        return {
            // Game variables
            downDistanceText,
            gameCompleted,
            gameDetail,
            gameState,
            id,
            isRedZone,
            possession,
            // Teams
            homeTeam: {
                id: homeTeam.id,
                displayName: homeTeam.team.displayName,
                name: homeTeam.team.name,
                logo: homeTeam.team.logo,
                score: homeTeam.score,
                winner: homeTeam.winner,
                record: `(${homeTeam.records[0].summary})`
            },
            awayTeam: {
                id: awayTeam.id,
                displayName: awayTeam.team.displayName,
                name: awayTeam.team.name,
                logo: awayTeam.team.logo,
                score: awayTeam.score,
                winner: awayTeam.winner,
                record: `(${awayTeam.records[0].summary})`
            }
        }
    })
}

/**
 * Retrieves sport score data and formats it for display
 *
 * @param {Function} setLoading Setter function for loading
 * @param {Function} setGameData Setter function for gameData
 * @param {Object} testData MOCK JSON data for testing purposes
 * @param {Object} isTestMode Indicates wether to use testData or retrieve remote data
 * @returns
 */
export const getGameData = async (
    isTestMode,
    setError,
    setGameData,
    setLoading,
    shouldShowLoading,
    testData,
) => {
    if(isTestMode){
        setGameData(formatGameData(testData))
        return
    }

    if (shouldShowLoading) setLoading(true)
    const url = 'https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard'
    let request
    try {
        request = await axios.get(url)
    }
    catch (err) {
        setLoading(false)
        setError(err)
        return
    }

    const scoreData = formatGameData(request.data)

    setGameData(scoreData)
    if(shouldShowLoading) setLoading(false)
}