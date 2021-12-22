
import {useState} from 'react';
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import * as productService from '../../../services/productService';
import styles from './ProductInformationCard.module.css';

const ProductInformationCard = ({product}) => {


	let rateSum = 0;

	for (let i = 0; i < product.rate.length; i++) {
		rateSum += product.rate[i].rate;
	}

	let final = rateSum / product.rate.length;

	const[rate, setRate] = useState(final);
	const[quantity, setQuantity] = useState(1);

    const addRate = (e, addRate) => {
		e.preventDefault();

		productService.addRate(product._id, addRate)
		.then(result => {
			setRate(addRate);
		})

    }

	const onChangeQuantity = (e) => {
		console.log(e.currentTarget.value);
	}

    return (
        <div className="product-details">
						<div className="col-sm-5">
							<div className="view-product">
								<img src={product.imageUrl} alt={product.modelName} />
							</div>

						</div>
						<div className="col-sm-7">
							<div className="product-information">
								<h2>{product.modelName}</h2>
								<p>{product.description}</p>
                                <div className="rating">
                                    {rate > 0 ? <AiFillStar className={styles.star} onClick={e => addRate(e, 1)}/> : <AiOutlineStar className={styles.star} onClick={e => addRate(e, 1)} />}
                                    {rate > 1 ? <AiFillStar className={styles.star} onClick={e => addRate(e, 2)}/> : <AiOutlineStar className={styles.star} onClick={e => addRate(e, 2)} />}
                                    {rate > 2 ? <AiFillStar className={styles.star} onClick={e => addRate(e, 3)}/> : <AiOutlineStar className={styles.star} onClick={e => addRate(e, 3)} />}
                                    {rate > 3 ? <AiFillStar className={styles.star} onClick={e => addRate(e, 4)}/> : <AiOutlineStar className={styles.star} onClick={e => addRate(e, 4)} />}
                                    {rate > 4 ? <AiFillStar className={styles.star} onClick={e => addRate(e, 5)} /> : <AiOutlineStar className={styles.star} onClick={e => addRate(e, 5)} />}
								</div>
								<span className="row">
									<span className="col-md-12">{'$' + product.price}</span>
									<span className="col-md-3"></span>
									<label className="col-md-3">Quantity:</label>
									<input type="number" className={styles.quantity} onChange={(e) => onChangeQuantity(e)} defaultValue={quantity} />
									<button type="button" className="btn btn-fefault cart col-md-12">
										<i className="fa fa-shopping-cart"></i>
										Add to cart
									</button>
								</span>
								<p><b>Brand:</b> {product.brand}</p>
							</div>
						</div>
					</div>
    ) 
}

export default ProductInformationCard;