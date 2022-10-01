import Card from '@mui/material/Card'
import React from 'react'
import SportsFootballIcon from '@mui/icons-material/SportsFootball'
import Typography from '@mui/material/Typography'

export const DownInfo = ({children, scale}) => {
    const style = {
        fontSize: 12 * scale,
        minHeight: 14 * scale,
        marginTop: 1 * scale,
    }

    return <Typography scale={scale} sx={style}>{children}</Typography>
}
export const PossessionIcon = ({scale}) => {
    const style = {
        width: 15 * scale,
        marginLeft: 2 * scale
    }

    return <SportsFootballIcon sx={style}/>
}

export const Record = ({children}) => {
    const style = {
        fontSize: 12
    }

    return <Typography sx={style}>{children}</Typography>
}

export const Score = ({children, winner}) => {
    const style = {
        fontWeight: winner && 'bold',
        textAlign: 'right',
    }

    return <Typography sx={style}>{children}</Typography>
}

export const ScoreCardContainer = ({children, isDarkMode, isRedZone, scale}) => {
    // styling for when a team is in the redzone (https://en.wikipedia.org/wiki/Red_zone_(gridiron_football))
    const style = {
        backgroundColor:
            isRedZone ?
                isDarkMode ? '#880808' : '#D22B2B'
                : '',
        color: isRedZone ? 'white' : '',
        width: 300 * scale,
    }

    return <Card sx={style}>{children}</Card>
}

/**
 * TeamLogo is a styled image for team logos
 *
 * @param {String} teamName The name of the team
 * @param {String} src The url for the team logo
 * @returns
 */
 export const TeamLogo = ({teamName, src, scale}) => {
    // Styles
    const style = {
        maxWidth: 50 * scale
    }

    return (
        <img
        alt={`${teamName} logo`}
        src={src}
        style={{...style}}
        />
    )
}

export const TeamName = ({children, winner}) => {
    const style = {
        fontWeight: winner && 'bold',
    }

    return <Typography sx={style}>{children}</Typography>
}

export const Timer = ({children, scale}) => {
    const style = {
        fontSize: 12 * scale,
        marginBottom: 1 * scale,
        minHeight: 14 * scale
    }

    return <Typography sx={style}>{children}</Typography>
}