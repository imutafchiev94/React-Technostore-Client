import {Link} from 'react-router-dom';
import ProductListCard from './ProductListCard';

const ProductsList = ({products}) => {
    const paginationNumbers = Math.ceil(products.length / 9);

    const pages = [];

    for (let index = 1; index <= paginationNumbers; index++) {
        pages.push(index);
    }

    products = products.slice(0, 9);

    return (
        <div className="col-sm-9 padding-right">
					<div className="features_items">
						<h2 className="title text-center"> Items</h2>
						
                        {products.length > 0 ? 
                        products.map(x => <ProductListCard key={x._id} product={x} />)
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