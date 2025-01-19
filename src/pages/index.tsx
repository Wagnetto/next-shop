import Image from 'next/image'
import { HomeContainer, Product } from '../styles/pages/home'

import tee1 from '../assets/product-images/red-T.png'
import hoodie from '../assets/product-images/hoodie.png'
import tee2 from '../assets/product-images/basic-black-T.png'

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={tee1} width={520} height={480} alt='' />
        <footer>
          <strong>Basic Red Tee </strong>
          <span>R$ 119,00</span>
        </footer>
      </Product>

      <Product>
        <Image src={hoodie} width={520} height={480} alt='' />
        <footer>
          <strong>Orange Hoodie </strong>
          <span>R$ 369,00</span>
        </footer>
      </Product>

      <Product>
        <Image src={tee2} width={520} height={480} alt='' />
        <footer>
          <strong>Basic black Tee </strong>
          <span>R$ 119,00</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
