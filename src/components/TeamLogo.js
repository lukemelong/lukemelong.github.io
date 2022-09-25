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