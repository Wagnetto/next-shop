import { GetServerSideProps } from 'next'
import Image from 'next/image'

import { useKeenSlider } from 'keen-slider/react'

import { stripe } from '../lib/stripe'
import { HomeContainer, Product } from '../styles/pages/home'

import redTee from '../assets/product-images/red-T.png'
import hoodie from '../assets/product-images/hoodie.png'
import blackTee from '../assets/product-images/basic-black-T.png'
import cap from '../assets/product-images/cap.png'
import greenTee from '../assets/product-images/green-T.png'

import 'keen-slider/keen-slider.min.css'
import Stripe from 'stripe'

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: number
  }[]
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2.7,
      spacing: 48,
    },
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      {products.map((product) => {
        return (
          <Product key={product.id} className="keen-slider__slide">
            <Image src={product.imageUrl} width={520} height={480} alt="" />
            <footer>
              <strong>{product.name}</strong>
              <span>
                {product.price.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </span>
            </footer>
          </Product>
        )
      })}
    </HomeContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount / 100,
    }
  })

  return {
    props: {
      products,
    },
  }
}
