// context/ModalContext.tsx
'use client'
import { ReactNode, createContext, useContext, useState } from 'react'
import { CartModal } from '../pages/components/modal/cartModal'

interface ModalContextProps {
  isCartOpen: boolean
  openCartModal: () => void
  closeCartModal: () => void
}

const ModalContext = createContext<ModalContextProps>({} as ModalContextProps)

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isCartOpen, setIsCartOpen] = useState(false)

  return (
    <ModalContext.Provider
      value={{
        isCartOpen,
        openCartModal: () => setIsCartOpen(true),
        closeCartModal: () => setIsCartOpen(false),
      }}
    >
      {children}
      {isCartOpen && <CartModal />}
    </ModalContext.Provider>
  )
}

export const useModal = () => useContext(ModalContext)
