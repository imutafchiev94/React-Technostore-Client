import styles from './MostRatedProductCard.module.css';
import {Link} from 'react-router-dom';
import { useAuthContext } from '../../../context/AuthContext';
import { useCartContext } from '../../context/CartContext';

const MostRatedProductCard = ({product}) => {
  const {isAuthenticated} = useAuthContext();
  const {addToCart} = useCartContext();

  const onClickButton = (e) => {
		e.preventDefault();

		addToCart(1, product);
	}
  return (
    <div className="col-sm-3">
    <div className={styles.productImageWrapper}>
      <div className={styles.singleProduct}>
        <div className="productinfo text-center">
          <Link to={`/details/${product._id}`}><img src={product.imageUrl} className={styles.productImage} alt={product.modelName} /></Link>
          <h2>$ {product.price}</h2>
         <Link to={`/details/${product._id}`}> <p>{product.brand} {product.modelName}</p></Link>
          <button type="button" className="btn btn-default add-to-cart" onClick={onClickButton} disabled={!isAuthenticated}>
            <i className="fa fa-shopping-cart"></i>Add to cart
          </button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default MostRatedProductCard;
