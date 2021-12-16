import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import * as productsService from '../../services/productService';

const BrandsList = ({products}) => {
    const [brands, setBrands] = useState([]);
    useEffect(() => {
		productsService.getAllBrands("61aa435b5b0150275cf0693d")
		.then(result => {
			setBrands(result)
		})
	}, []);

    let allBrands = [...new Set(brands)];

    return (
        <div className="brands_products">
							<h2>Brands</h2>
							<div className="brands-name">
								<ul className="nav nav-pills nav-stacked">
                                {allBrands.length > 0 ? 
                                allBrands.map(x => <li key={x}><Link to=""> <span className="pull-right">({brands.filter(b => b === x).length})</span>{x}</Link></li>)
                            : <></>}
								</ul>
							</div>
						</div>
    )
}

export default BrandsList;