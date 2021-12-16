
import Advertisment from './Advertisment';
import styles from './ProductsListPage.module.css';

import BrandsList from './BrandsList';
import ShippingAdvertisment from './ShippingAdvertisment';
import ProductsList from './ProductsList'

const ProductsListPage = () => {
    



    return (
        <>   
	<Advertisment />
	<section className={styles.productsList}>
		<div className="container">
			<div className="row">
				<div className="col-sm-3">
					<div className="left-sidebar">
					
						<BrandsList />

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
				<ProductsList/>
				
			</div>
		</div>
	</section>
		
        </>
    );
}

export default ProductsListPage;