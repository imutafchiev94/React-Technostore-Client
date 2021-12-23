
import React, {Suspense} from 'react';
import ProductInformationCard from './ProductInformationCard/ProductInformationCard';
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import * as productsService from '../../services/productService';
import Spinner from '../Spinner/Spinner';
import {Tabs, Tab} from 'react-bootstrap';
import { useAuthContext } from '../../context/AuthContext';

const LatestProductsList = React.lazy(() => import('../LatestProducts/LatestProductsList'))
const ProductDetailsCard = React.lazy(() => import('./ProductDetailsCard/ProductDetailsCard'));
const AddReviewCard = React.lazy(() => import('../../Reviews/AddReview/AddReviewCard'));
const ReviewList = React.lazy(() => import('../../Reviews/ReviewsList/ReviewList'));

const ProductDetailsPage = () => {

	const {productId} = useParams()
    const [product, setProduct] = useState({});
	const [tabKey, setTabKey] = useState('details');
	const {isAuthenticated} = useAuthContext();

	useEffect(() => {
		productsService.getProduct(productId)
		.then(result => {
			setProduct(result);
		})
	},[productId]);

	console.log(product);
if(Object.keys(product).length === 0 && product.constructor === Object) {
	return ( <Spinner />)
} 
	
    return (
        <section>
		<div className="container">
			<div className="row">
				<div className="col-md-12">
				
					 <ProductInformationCard product={product} />
					
	<Tabs
      id="controlled-tab-example"
      activeKey={tabKey}
      onSelect={(k) => setTabKey(k)}
      className="mb-3"
    >
		<Tab eventKey="details" title="Details">
			<Suspense fallback={ <Spinner />}>
        <ProductDetailsCard product={product} />
		</Suspense>
      </Tab>
      <Tab eventKey="reviews" title="Reviews">
	  <Suspense fallback={ <Spinner />}>
        <ReviewList reviews={product.reviews} />
		</Suspense>
      </Tab>
	  {isAuthenticated ?
      <Tab eventKey="addReview" title="Add Review">
	  <Suspense fallback={ <Spinner />}>
        <AddReviewCard productId={product._id}/>
		</Suspense>
      </Tab>
		: <></>}
		</Tabs>
		<div className="col-md-12">
		<Suspense fallback={ <Spinner />}>
		<LatestProductsList />	
		</Suspense>
		</div>
				</div>
			</div>
		</div>
	</section>
    )
}

export default ProductDetailsPage;