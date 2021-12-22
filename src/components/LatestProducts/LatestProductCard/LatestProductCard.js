import styles from './LatestProductCard.module.css';
import {Link} from 'react-router-dom';

const LatestProductCard = ({product}) => {
  return (
    <div className="col-sm-3">
      <div className={styles.productImageWrapper}>
        <div className={styles.singleProduct}>
          <div className="productinfo text-center">
            <Link to={`/details/${product._id}`}><img src={product.imageUrl} className={styles.productImage} alt={product.modelName} /></Link>
            <h2>$ {product.price}</h2>
           <Link to={`/details/${product._id}`}> <p>{product.brand} {product.modelName}</p></Link>
            <button type="button" className="btn btn-default add-to-cart">
              <i className="fa fa-shopping-cart"></i>Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestProductCard;
