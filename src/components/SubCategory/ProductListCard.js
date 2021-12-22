import {Link} from 'react-router-dom';
import styles from './ProductListCard.module.css';

const ProductListCard = ({product}) => {
  return (
    <div className="col-sm-4">
      <div className={styles.productImageWrapper}>
        <div className={styles.singleProduct}>
          <div className="productinfo text-center">
            <img src={product.imageUrl} className={styles.productImage} alt={product.modelName} />
            <h2>{"$" + product.price}</h2>
            <Link to={`/details/${product._id}`}> <p>{product.brand} {product.modelName}</p> </Link>
            <Link
              onClick={(event) => event.preventDefault()}
              to="#"
              className="btn btn-default add-to-cart"
            >
              <i className="fa fa-shopping-cart"></i>Add to cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListCard;
