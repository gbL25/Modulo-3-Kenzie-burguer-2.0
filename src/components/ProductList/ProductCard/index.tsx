import { StyledProductCard } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph, StyledTitle } from '../../../styles/typography';


const ProductCard = ({ name, category, price, id, img }: any) => {


  return (
    <StyledProductCard id={id}>
      <div className='imageBox'>
        <img src={img} alt='Hamburguer' />
      </div>
      <div className='content'>
        <StyledTitle tag='h3' $fontSize='three'>
          {name}
        </StyledTitle>
        <StyledParagraph className='category'>{category}</StyledParagraph>
        <StyledParagraph className='price'>{price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</StyledParagraph>
        <StyledButton $buttonSize='medium' $buttonStyle='green'>
          Adicionar
        </StyledButton>
      </div>
    </StyledProductCard>
  )
}

export default ProductCard;


