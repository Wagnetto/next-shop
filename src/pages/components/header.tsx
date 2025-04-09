import Image from 'next/image'
import { LogoContainer, StyledHeader } from '../../styles/pages/header'
import { useShoppingCart } from 'use-shopping-cart'
import logoImg from '../../assets/logo.png'
import bagIcon from '../../assets/bagIcon.png'
import { useModal } from '../../context/modalContext'

export function Header() {
  const { openCartModal } = useModal()
  // const [isCartOpen, setIsCartOpen] = useState(false)
  const { cartCount } = useShoppingCart()

  return (
    <StyledHeader>
      <LogoContainer>
        <Image src={logoImg} alt="logo" width={40} height={40} />
        <h1>Next.js shop</h1>
      </LogoContainer>
      <button onClick={openCartModal}>
        <Image src={bagIcon} width={32} height={32} alt="Carrinho" />
        <span>{cartCount}</span> {/* Exibe o número de itens no carrinho */}
      </button>
    </StyledHeader>
  )
}
