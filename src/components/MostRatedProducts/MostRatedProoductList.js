import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import MostRatedProductCard from './MostRatedProductCard';
import * as productService from '../../services/productService';
import styles from './MostRatedProductsList.module.css';


const MostRatedProductsList = () => {

    const [mostRatedProducts, setMostRatedProducts] = useState([]);

    useEffect(() => 
    productService.getMostRatedProducts()
    .then((result) => {
        setMostRatedProducts(result);
    }), [])

    return (
        <section className={styles.mostRatedProducts}>
            <div className="recommended_items">
						<h2 className="title text-center">Most Rated Products</h2>
						
						<div id="recommended-item-carousel" className="carousel slide" data-ride="carousel">
							<div className="carousel-inner">
								<div className="item active">	
									{mostRatedProducts.length > 0 ?
                                    mostRatedProducts.map(x => <MostRatedProductCard key={x._id} product={x}/>)
                                :<p>There have no latest products</p>}
									
								</div>
							</div>
							 <Link className={styles.mostRatedProductsControlLeft} onClick={(event) => event.preventDefault()} to="#recommended-item-carousel" data-slide="prev">
								<i className="fa fa-angle-left"></i>
							  </Link>
							  <Link className={styles.mostRatedProductsControlRight} onClick={(event) => event.preventDefault()} to="#recommended-item-carousel" data-slide="next">
								<i className="fa fa-angle-right"></i>
							  </Link>			
						</div>
					</div>
        </section>
    )
}

export default MostRatedProductsList;