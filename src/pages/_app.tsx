import { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import logoImg from '../assets/logo.png'
import { Container, Header, LogoContainer } from '../styles/pages/app'
import Image from 'next/image'
import { CartProvider } from 'use-shopping-cart'

globalStyles()
const stripeKey = process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY
const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
const cancelUrl = `${process.env.NEXT_URL}/`

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <LogoContainer>
          <Image src={logoImg} alt="logo" width="40px" height="40px" />
          <h1>Next.js shop</h1>
        </LogoContainer>
      </Header>
      <CartProvider
        mode="payment"
        cartMode="client-only"
        stripe={stripeKey}
        currency="BRL"
        successUrl={successUrl}
        cancelUrl={cancelUrl}
        shouldPersist={true}
      >
        <Component {...pageProps} />
      </CartProvider>
    </Container>
  )
}
