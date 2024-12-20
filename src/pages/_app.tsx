import {AppProps} from 'next/app'
import {globalStyles} from '../styles/global'
import logoImg from '../assets/logo.png'
import {Container, Header, LogoContainer} from '../styles/pages/app'

globalStyles()

export default function App({Component, pageProps}: AppProps) {
  return (
    <Container>
      <Header>
        <LogoContainer>
          <img src={logoImg.src} alt='logo' width='40px' />
          <h1>Next.js shop</h1>
        </LogoContainer>
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}
