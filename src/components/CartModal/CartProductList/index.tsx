import CartProductCard from './CartProductCard';

import { StyledCartProductList } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph } from '../../../styles/typography';
import { useContext } from 'react';
import { CartContext } from '../../../providers/CartContext';


const CartProductList = () => {
  const { currentSale, setCurrentSale } = useContext(CartContext)

  const totalPrice = currentSale.reduce((accumulator, element) => {
    return accumulator + element.price
  }, 0)

  const deleteAllProducts = () => {
    setCurrentSale([])
  }

  return (
    <StyledCartProductList>
      <ul>
        {currentSale.map((element) => (<CartProductCard key={element.id} element={element} />))}
      </ul>
      <div className='totalBox'>
        <StyledParagraph>
          <strong>Total</strong>
        </StyledParagraph>
        <StyledParagraph className='total'>{totalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</StyledParagraph>
      </div>
      <StyledButton $buttonSize='default' $buttonStyle='gray' onClick={() => deleteAllProducts()}>
        Remover todos
      </StyledButton>
    </StyledCartProductList>
  )
};

export default CartProductList;
