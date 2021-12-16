import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import ProductListCard from './ProductListCard';
import * as productsService from '../../services/productService';

const ProductsList = () => {


    const [products, setProducts] = useState([]);

	useEffect(() => {
		productsService.getAllProductsFromSubCategory("61aa435b5b0150275cf0693d")
		.then(result => {
			setProducts(result);
		})
	},[])

	console.log(products);

    const paginationNumbers = Math.ceil(products.length / 9);

    const pages = [];

    for (let index = 1; index <= paginationNumbers; index++) {
        pages.push(index);
    }

    let allproducts = products.slice(0, 9);

    return (
        <div className="col-sm-9 padding-right">
					<div className="features_items">
						<h2 className="title text-center"> Items</h2>
						
                        {allproducts.length > 0 ? 
                        allproducts.map(x => <ProductListCard key={x._id} product={x} />)
                    : <p>There have no products!</p>}

						
					</div>
                    {pages.length > 1 ? 
                    <ul className="pagination">
                        {pages.map(x => x === 1 
                        ? <li key={x} className="active"><Link to="">{x}</Link></li> 
                        : <li><Link to="">{x}</Link></li>)}
                    <li><Link to="">&raquo;</Link></li>
                </ul> : <></>
                }
				</div>
    )
}

export default ProductsList;