import {styled} from '..'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  //   justifyContent: 'center',
  minHeight: '100vh',
})

export const LogoContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  fontSize: '1rem',
  gap: '1rem',
})

export const Header = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
})
