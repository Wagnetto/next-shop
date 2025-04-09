import { styled } from '@stitches/react'
import { ReactNode } from 'react'
import { createPortal } from 'react-dom'

const ModalOverlay = styled('div', {
  position: 'fixed',
  inset: 0,
  zIndex: 50,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
})

const ModalContent = styled('div', {
  position: 'relative',
  width: '100%',
  maxWidth: '32rem',
  borderRadius: '0.5rem',
  backgroundColor: 'darkgray',
  padding: '1.5rem',
  color: '$green500',
})

const ModalHeader = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '0.75rem',
})

const CloseButton = styled('button', {
  border: 'none',
  background: 'none',
  color: '#6b7280',
  '&:hover': {
    color: '#374151',
  },
})

interface ModalBaseProps {
  title: string
  children: ReactNode
  onClose: () => void
  subheading?: string
}

export function ModalBase({
  title,
  children,
  subheading,
  onClose,
}: ModalBaseProps) {
  return createPortal(
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <div>
            <h2>{title}</h2>
            {subheading && <p>{subheading}</p>}
          </div>
          <CloseButton onClick={onClose}>
            {/* Substitua por seu ícone preferido */}
            <span>X</span>
          </CloseButton>
        </ModalHeader>
        <div>{children}</div>
      </ModalContent>
    </ModalOverlay>,
    document.body,
  )
}
