import { useContext } from 'react';
import ProductCard from './ProductCard';
import { StyledProductList } from './style';
import { CartContext } from '../../providers/CartContext';

const ProductList = () => {

  const { listProducts } = useContext(CartContext)

  return (
    <StyledProductList>
      {listProducts.map((element) =>
        <ProductCard key={element.id} id={element.id} name={element.name} category={element.category} price={element.price} img={element.img} />
      )}
    </StyledProductList>
  )
};

export default ProductList;
