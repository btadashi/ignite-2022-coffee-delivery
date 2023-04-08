import { Trash } from 'phosphor-react'
import { QuantityInput } from '../../../../components/QuantityInput'
import { RegularText } from '../../../../components/Typography'
import {
  ActionsContainer,
  CoffeeCartCardContainer,
  RemoveButton,
} from './styles'
import { CartItem } from '../../../../contexts/CartContext'
import { formatMoney } from '../../../../utils/formatMoney'
import { useCart } from '../../../../hooks/useCart'

interface CoffeeCartCardProps {
  coffee: CartItem
}

export function CoffeeCartCard({ coffee }: CoffeeCartCardProps) {
  const { changeCartItemQuantity, removeCartItem } = useCart()

  function handleIncreaseQuantity() {
    changeCartItemQuantity(coffee.id, 'increase')
  }

  function handleDecreaseQuantity() {
    changeCartItemQuantity(coffee.id, 'decrease')
  }

  function handleRemoveCartItem() {
    removeCartItem(coffee.id)
  }

  const coffeeTotal = coffee.price * coffee.quantity
  const formattedPrice = formatMoney(coffeeTotal)

  return (
    <CoffeeCartCardContainer>
      <div>
        <img src={`/coffees/${coffee.image}`} alt="" />
        <div>
          <RegularText color="subtitle">{coffee.name}</RegularText>
          <ActionsContainer>
            <QuantityInput
              size="small"
              quantity={coffee.quantity}
              onIncreaseQuantity={handleIncreaseQuantity}
              onDecreaseQuantity={handleDecreaseQuantity}
            />
            <RemoveButton onClick={handleRemoveCartItem}>
              <Trash size={16} />
              Remover
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>
      <p>R$ {formattedPrice}</p>
    </CoffeeCartCardContainer>
  )
}
