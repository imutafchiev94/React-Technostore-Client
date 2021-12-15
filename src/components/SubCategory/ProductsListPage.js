import {useState, useEffect} from 'react';
import Advertisment from './Advertisment';
import styles from './ProductsListPage.module.css';
import * as productsService from '../../services/productService';
import BrandsList from './BrandsList';
import ShippingAdvertisment from './ShippingAdvertisment';
import ProductsList from './ProductsList'

const ProductsListPage = () => {
    

	const [products, setProducts] = useState([]);

	useEffect(() => {
		productsService.getAllProductsFromSubCategory("61aa435b5b0150275cf0693d")
		.then(result => {
			setProducts(result);
		})
	},[])

	console.log(products);

    return (
        <>   
	<Advertisment />
	<section className={styles.productsList}>
		<div className="container">
			<div className="row">
				<div className="col-sm-3">
					<div className="left-sidebar">
					
						<BrandsList products={products}/>

						<div className="price-range row">
							<h2>Price Range</h2>
							<div className="well col-md-6">
                                <label>Min</label>
								 <input type="number" className={styles.priceRange} value="0" name='minPrice' id='minPrice' /> $<br />
							</div>
                            <div className="well col-md-6">
                                <label>Max</label>
								 <input type="number" className={styles.priceRange} value="4000" name='maxPrice' id='maxPrice' /> $<br />
							</div>
						</div>
						
						<ShippingAdvertisment />
						
					</div>
				</div>
				<ProductsList products={products} />
				
			</div>
		</div>
	</section>
		
        </>
    );
}

export default ProductsListPage;