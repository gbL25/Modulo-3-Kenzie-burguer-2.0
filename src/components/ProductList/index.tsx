import { useContext } from 'react';
import ProductCard from './ProductCard';
import { StyledProductList } from './style';
import { CartContext } from '../../providers/CartContext';

const ProductList = () => {

  const { listProducts } = useContext(CartContext)

  return (
    <StyledProductList>
      {listProducts.map((element) =>
        <ProductCard key={element.id} element={element} />
      )}
    </StyledProductList>
  )
};

export default ProductList;
