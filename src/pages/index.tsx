import Image from 'next/image'
import { HomeContainer, Product } from '../styles/pages/home'
import { useKeenSlider } from 'keen-slider/react'

import redTee from '../assets/product-images/red-T.png'
import hoodie from '../assets/product-images/hoodie.png'
import blackTee from '../assets/product-images/basic-black-T.png'
import cap from '../assets/product-images/cap.png'
import greenTee from '../assets/product-images/green-T.png'

import 'keen-slider/keen-slider.min.css'
// import { useEffect, useState } from 'react'

export default function Home(props) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2.7,
      spacing: 48,
    },
  })
  // const [list, setList] = useState<number[]>()

  // useEffect(() => {
  //   setTimeout(() => {
  //     setList([1, 2, 3, 4])
  //   }, 3000)
  // }, [list])

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <pre>{JSON.stringify(props.list)}</pre>
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

export const getServerSideProps = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  console.log('rodou, mas apenas no servidor. Client não visualiza')
  return {
    props: {
      list: [1, 2, 3, 4],
    },
  }
}
