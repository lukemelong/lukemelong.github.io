import axios from "axios"

export const getScoreData = async (setLoading, setScoreData) => {
    setLoading(true)
    const url = 'https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard'
    const request = await axios.get(url)
    setScoreData(request.data)
    setLoading(false)
}