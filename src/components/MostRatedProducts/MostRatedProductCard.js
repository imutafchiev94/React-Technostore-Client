import styles from './MostRatedProductCard.module.css';

const MostRatedProductCard = ({product}) => {
  return (
    <div className="col-sm-4">
      <div className={styles.productImageWrapper}>
        <div className={styles.singleProduct}>
          <div className="productinfo text-center">
            <img src={product.imageUrl} className={styles.productImage} alt={product.modelName} />
            <h2>$ {product.price}</h2>
            <p>{product.brand} {product.modelName}</p>
            <button type="button" className="btn btn-default add-to-cart">
              <i className="fa fa-shopping-cart"></i>Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MostRatedProductCard;
