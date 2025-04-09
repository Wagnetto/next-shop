import { styled } from '@stitches/react'

export const StyledHeader = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
  button: {
    marginTop: 'auto',
    backgroundColor: '$green500',
    border: 0,
    color: '$white',
    borderRadius: 8,
    padding: '1.25rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '$md',

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },

    '&:not(:disabled)hover': {
      backgroundColor: '$green300',
    },
  },
})

export const LogoContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  fontSize: '1rem',
  gap: '1rem',
})
