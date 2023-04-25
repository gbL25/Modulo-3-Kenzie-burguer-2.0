import { StyledProductCard } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph, StyledTitle } from '../../../styles/typography';
import { CartContext, ICard } from '../../../providers/CartContext';
import { useContext } from 'react';


interface ProductCardProps {
  element: ICard
}

const ProductCard = ({ element }: ProductCardProps) => {
  const { addToCart } = useContext(CartContext)
  return (
    <StyledProductCard id={element.id}>
      <div className='imageBox'>
        <img src={element.img} alt='Hamburguer' />
      </div>
      <div className='content'>
        <StyledTitle tag='h3' $fontSize='three'>
          {element.name}
        </StyledTitle>
        <StyledParagraph className='category'>{element.category}</StyledParagraph>
        <StyledParagraph className='price'>{element.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</StyledParagraph>
        <StyledButton $buttonSize='medium' $buttonStyle='green' onClick={() => addToCart(element)}>
          Adicionar
        </StyledButton>
      </div>
    </StyledProductCard>
  )
}

export default ProductCard;


