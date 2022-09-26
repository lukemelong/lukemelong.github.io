/**
 * TeamLogo is a styled image for team logos
 * 
 * @param {String} teamName The name of the team
 * @param {String} src The url for the team logo
 * @returns 
 */
const TeamLogo = ({teamName, src}) => {
    return (
        <img
        alt={`${teamName} logo`}
        src={src}
        style={{ maxWidth: 50 }}
        />
    )
}

export default TeamLogo