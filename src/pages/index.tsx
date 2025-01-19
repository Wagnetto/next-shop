import Image from 'next/image'
import { HomeContainer, Product } from '../styles/pages/home'
import { useKeenSlider } from 'keen-slider/react'

import redTee from '../assets/product-images/red-T.png'
import hoodie from '../assets/product-images/hoodie.png'
import blackTee from '../assets/product-images/basic-black-T.png'
import cap from '../assets/product-images/cap.png'
import greenTee from '../assets/product-images/green-T.png'

import 'keen-slider/keen-slider.min.css'

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2.7,
      spacing: 48,
    },
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={redTee} width={520} height={480} alt="" />
        <footer>
          <strong>Basic Red Tee </strong>
          <span>R$ 119,00</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={hoodie} width={520} height={480} alt="" />
        <footer>
          <strong>Orange Hoodie </strong>
          <span>R$ 369,00</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={blackTee} width={520} height={480} alt="" />
        <footer>
          <strong>Basic Black Tee </strong>
          <span>R$ 119,00</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={cap} width={520} height={480} alt="" />
        <footer>
          <strong>White Cap </strong>
          <span>R$ 99,00</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={greenTee} width={520} height={480} alt="" />
        <footer>
          <strong>Basic Green Tee </strong>
          <span>R$ 119,00</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
