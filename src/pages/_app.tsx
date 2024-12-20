import {AppProps} from 'next/app'
import {globalStyles} from '../styles/global'
import logoImg from '../assets/logo.png'
import {Container, Header, LogoContainer} from '../styles/pages/app'
import Image from 'next/image'

globalStyles()

export default function App({Component, pageProps}: AppProps) {
  return (
    <Container>
      <Header>
        <LogoContainer>
          <Image src={logoImg} alt='logo' width='40px' height='40px' />
          <h1>Next.js shop</h1>
        </LogoContainer>
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}
