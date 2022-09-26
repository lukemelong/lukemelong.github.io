import axios from "axios"

export const getScoreData = async (setLoading, setScoreData) => {
    setLoading(true)
    const url = 'https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard'
    const request = await axios.get(url)
    const scoreData = formatGameData(request.data)

    setScoreData(scoreData)
    setLoading(false)
}

const formatGameData = (games) => {
    return  games.events.map(game => {
        const competition = game.competitions[0],
        id = competition.id,
        homeTeam = competition.competitors[0],
        awayTeam = competition.competitors[1],
        downDistanceText = competition?.situation?.downDistanceText,
        { 
            status: {
                type: { 
                    detail 
                }
            }
        } = competition

        return {
            // Game variables
            detail,
            downDistanceText,
            id,
            // Teams
            homeTeam: {
                displayName: homeTeam.team.displayName,
                logo: homeTeam.team.logo,
                score: homeTeam.score
            },
            awayTeam: {
                displayName: awayTeam.team.displayName,
                logo: awayTeam.team.logo,
                score: awayTeam.score
            }
        }
    })
}
/*
[
    {
        detail: string,
        teams: {
            homeTeam: {
                displayName: string,
                logo: string,
                score: number
            },
            awayTeam: {
                // Same as home team
            }
        }
    }
]
*/