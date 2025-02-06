import Link from 'next/link'
import { ImageContainer, SuccessContainer } from '../styles/pages/success'

export default function Success() {
  return (
    <SuccessContainer>
      <h1>Compra Efetuada!</h1>
      <ImageContainer></ImageContainer>
      <p>
        Obaa! <span>[Nome do Cliente]</span>, sua compra{' '}
        <span>[nome do produto]</span> foi efetuada e em breve estará a caminho
        da sua casa.
      </p>

      <Link href="/">Voltar ao catálogo</Link>
    </SuccessContainer>
  )
}
