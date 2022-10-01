// Components
import Box from '@mui/material/Box'
import styled from '@mui/system/styled'


export const LoadingSpinnerContainer = styled(Box)
({
  display: 'flex',
  height: '100vh',
  justifyContent: 'center',
  alignItems: 'center'
})

export const LoadingSpinnerxChildren = styled('div')
(({ isDarkMode }) => ({
  display: 'inline-block',
  position: 'relative',
  width: '80px',
  height: '80px',
  transform: 'scale(3)',
  'div': {
    position: 'absolute',
    top: '33px',
    width: '13px',
    height: '13px',
    borderRadius: '50%',
    background:
    isDarkMode ? 'white' : 'black',
    animationTimingFunction: 'cubic-bezier(0, 1, 1, 0)',
  },
  'div:nth-of-type(1)': {
    left: '8px',
    animation: 'lds-ellipsis1 0.6s infinite',
  },
  'div:nth-of-type(2)': {
    left: '8px',
    animation: 'lds-ellipsis2 0.6s infinite',
  },
  'div:nth-of-type(3)': {
    left: '32px',
    animation: 'lds-ellipsis2 0.6s infinite',
  },
  'div:nth-of-type(4)': {
    left: '56px',
    animation: 'lds-ellipsis3 0.6s infinite',
  },
  '@keyframes lds-ellipsis1': {
    '0%': {
      transform: 'scale(0)',
    },
    '100%': {
      transform:' scale(1)',
    }
  },
  '@keyframes lds-ellipsis3': {
    '0%': {
      transform: 'scale(1)',
    },
    '100%': {
      transform: 'scale(0)',
    }
  },
  '@keyframes lds-ellipsis2': {
    '0%': {
      transform: 'translate(0, 0)',
    },
    '100%': {
      transform: 'translate(24px, 0)',
    }
  }
}))