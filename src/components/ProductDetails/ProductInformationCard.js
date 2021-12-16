import {Link} from "react-router-dom";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import * as productService from '../../services/productService';

const ProductInformationCard = ({product}) => {

    let ratesSum = 0;

    product.rate.forEach((x) => {ratesSum += x});

    const rate = parseInt(ratesSum / product.rate.length);

    const addRate = (e) => {
        e.preventDefault();


    }

    return (
        <div class="product-details">
						<div class="col-sm-5">
							<div class="view-product">
								<img src={product.imageUrl} alt={product.modelName} />
							</div>

						</div>
						<div class="col-sm-7">
							<div class="product-information">
								<h2>{product.modelName}</h2>
                                <div class="rating">
                                    {rate > 0 ? <AiFillStar /> :<AiOutlineStar />}
                                    {rate > 1 ? <AiFillStar /> :<AiOutlineStar />}
                                    {rate > 2 ? <AiFillStar /> :<AiOutlineStar />}
                                    {rate > 3 ? <AiFillStar /> :<AiOutlineStar />}
                                    {rate > 4 ? <AiFillStar /> :<AiOutlineStar />}
                                </div>
								<span>
									<span>US $59</span>
									<label>Quantity:</label>
									<input type="text" value="3" />
									<button type="button" class="btn btn-fefault cart">
										<i class="fa fa-shopping-cart"></i>
										Add to cart
									</button>
								</span>
								<p><b>Availability:</b> In Stock</p>
								<p><b>Condition:</b> New</p>
								<p><b>Brand:</b> E-SHOPPER</p>
								<Link to=""><img src="images/product-details/share.png" class="share img-responsive"  alt="" /></Link>
							</div>
						</div>
					</div>
    ) 
}

export default ProductInformationCard;