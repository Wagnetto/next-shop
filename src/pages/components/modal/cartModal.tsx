import { useShoppingCart } from 'use-shopping-cart'
import { styled } from '@stitches/react'
import { useModal } from '../../../context/modalContext'
import { ModalBase } from './modalBase'
import axios from 'axios'
import { useState } from 'react'

const CartItem = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0.5rem 0',
  borderBottom: '1px solid #e5e7eb',
})

const RemoveButton = styled('button', {
  background: 'none',
  border: 'none',
  color: '$green500',
  cursor: 'pointer',
  '&:hover': {
    color: '$green800',
  },
})

const CartFooter = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: '1rem',
  paddingTop: '1rem',
  borderTop: '1px solid #e5e7eb',
})

const CheckoutButton = styled('button', {
  backgroundColor: '$green500',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  padding: '0.75rem 1.5rem',
  cursor: 'pointer',
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: '$green300',
  },
  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },
})

const CancelButton = styled('button', {
  backgroundColor: '$green300',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  padding: '0.75rem 1.5rem',
  cursor: 'pointer',
  fontWeight: 'light',
  '&:hover': {
    backgroundColor: '$green800',
  },
  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },
})

export function CartModal() {
  const { cartDetails, removeItem, clearCart } = useShoppingCart()
  const { closeCartModal } = useModal()
  const [isLoading, setIsLoading] = useState(false)

  async function handleCheckout() {
    try {
      setIsLoading(true)

      // Transforma os itens do carrinho no formato esperado pela API
      const items = Object.values(cartDetails || {}).map((item) => ({
        price_id: item.price_id,
        quantity: item.quantity,
      }))

      const response = await axios.post('/api/checkout', { items })
      const { checkoutUrl } = response.data

      // Limpa o carrinho e redireciona
      clearCart()
      window.location.href = checkoutUrl
    } catch (error) {
      setIsLoading(false)
      alert('Erro ao processar checkout')
      console.error(error)
    }
  }

  return (
    <ModalBase title="Seu Carrinho" onClose={closeCartModal}>
      <div>
        {Object.values(cartDetails || {}).map((item) => (
          <CartItem key={item.id}>
            <div>
              <h3>{item.name}</h3>
              <p>{item.formattedValue}</p>
            </div>
            <RemoveButton onClick={() => removeItem(item.id)}>
              Remover
            </RemoveButton>
          </CartItem>
        ))}
      </div>

      <CartFooter>
        <CancelButton onClick={closeCartModal}>
          Continuar comprando
        </CancelButton>
        <CheckoutButton
          onClick={handleCheckout}
          disabled={
            isLoading || !cartDetails || Object.keys(cartDetails).length === 0
          }
        >
          {isLoading ? 'Processando...' : 'Finalizar Compra'}
        </CheckoutButton>
      </CartFooter>
    </ModalBase>
  )
}
