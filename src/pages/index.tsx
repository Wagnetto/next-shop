import Image from 'next/image'
import {HomeContainer, Product} from '../styles/pages/home'

import tee1 from '../assets/t-shirts/tee1.png'
import tee2 from '../assets/t-shirts/tee2.png'

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={tee1} width={520} height={480} alt='' />
        <footer>
          <strong>Astronaut Tee 1 </strong>
          <span>R$ 100,00</span>
        </footer>
      </Product>

      <Product>
        <Image src={tee2} width={520} height={480} alt='' />
        <footer>
          <strong>Astronaut Tee 2 </strong>
          <span>R$ 100,00</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
