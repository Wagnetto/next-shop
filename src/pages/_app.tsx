import { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import { Container } from '../styles/pages/app'
import { CartProvider } from 'use-shopping-cart'
import { Header } from './components/header'
import { ModalProvider } from '../context/modalContext'

globalStyles()
const stripeKey = process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY
const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
const cancelUrl = `${process.env.NEXT_URL}/`

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <CartProvider
        mode="payment"
        cartMode="client-only"
        stripe={stripeKey}
        currency="BRL"
        successUrl={successUrl}
        cancelUrl={cancelUrl}
        shouldPersist={true}
      >
        <ModalProvider>
          <Header />
          <Component {...pageProps} />
        </ModalProvider>
      </CartProvider>
    </Container>
  )
}
