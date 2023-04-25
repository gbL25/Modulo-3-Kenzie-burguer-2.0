import { MdDelete } from 'react-icons/md';

import { StyledCartProductCard } from './style';
import { StyledTitle } from '../../../../styles/typography';
import { CartContext, ICard } from '../../../../providers/CartContext';
import { useContext } from 'react';

interface CartProductCardProps {
  element: ICard
}

const CartProductCard = ({ element }: CartProductCardProps) => {

  const { removeProduct } = useContext(CartContext)

  return (
    <StyledCartProductCard >
      <div className='imageBox'>
        <img src={element.img} alt={element.name} />
      </div>
      <div className='contentBox'>
        <StyledTitle tag='h3' $fontSize='three'>
          {element.name}
        </StyledTitle>
        <button type='button' aria-label='Remover' onClick={() => removeProduct(element.id)}>
          <MdDelete size={24} />
        </button>
      </div>
    </StyledCartProductCard>
  )
};

export default CartProductCard;
