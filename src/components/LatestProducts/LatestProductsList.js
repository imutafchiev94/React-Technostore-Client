import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import LatestProductCard from './LatestProductCard';
import * as productService from '../../services/productService';
import styles from './LatestProductLists.module.css';


const LatestProductsList = () => {

    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() => 
    productService.getLatestProducts()
    .then((result) => {
        setLatestProducts(result);
    }), [])

    return (
        <section className={styles.latestProdcuts}>
            <div className="recommended_items">
						<h2 className="title text-center">Latest Products</h2>
						
						<div id="recommended-item-carousel" className="carousel slide" data-ride="carousel">
							<div className="carousel-inner">
								<div className="item active">	
									{latestProducts.length > 0 ?
                                    latestProducts.map(x => <LatestProductCard key={x._id} product={x}/>)
                                :<p>There have no latest products</p>}
									
								</div>
							</div>
							 <Link className={styles.latestProductsControlLeft} onClick={(event) => event.preventDefault()} to="#recommended-item-carousel" data-slide="prev">
								<i className="fa fa-angle-left"></i>
							  </Link>
							  <Link className={styles.latestProductsControlRight} onClick={(event) => event.preventDefault()} to="#recommended-item-carousel" data-slide="next">
								<i className="fa fa-angle-right"></i>
							  </Link>			
						</div>
					</div>
        </section>
    )
}

export default LatestProductsList;