import {Link} from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import { useState, useEffect } from 'react';
const CartPage = () => {
	const {cart, removeFromCart} = useCartContext();
	const [amount, setAmount] = useState(0);

	useEffect(() => {
		let sum = 0;
		for (let i = 0; i < cart.products.length; i++) {
			sum += cart.products[i].price;
		}
		setAmount(sum);
	}, [cart.products])

    return (
        <>
<section id="cart_items">
		<div className="container">
			<div className="breadcrumbs">
				<ol className="breadcrumb">
				  <li><Link  onClick={(event) => event.preventDefault()} to="#">Home</Link></li>
				  <li className="active">Shopping Cart</li>
				</ol>
			</div>
			<div className="table-responsive cart_info">
				<table className="table table-condensed">
					<thead>
						<tr className="cart_menu">
							<td className="image">Item</td>
							<td className='description'>Model Name</td>
							<td className="description">Description</td>
							<td className="price">Price</td>

							<td></td>
						</tr>
					</thead>
					<tbody>
						{cart.products.map((x) => 
							<tr>
							<td className="cart_product">
								<Link  onClick={(event) => event.preventDefault()} to=""><img src={x.imageUrl} style={{width: "100px"}} alt=""/></Link>
							</td>
							<td className="cart_description">
								<h4><Link  onClick={(event) => event.preventDefault()} to="">{x.modelName}</Link></h4>
							</td>
							<td className="cart_description">
								<h4><Link  onClick={(event) => event.preventDefault()} to="">{x.description}</Link></h4>
							</td>
							<td className="cart_price">
								<p>{`$ ${x.price}`}</p>
							</td>
						</tr>
						)}
					</tbody>
				</table>
			</div>
		</div>
	</section> 

	<section id="do_action">
		<div className="container">
			<div className="heading">
				<h3>What would you like to do next?</h3>
			</div>
			<div className="row">
					
				<div className="col-sm-6">
					<div className="total_area">
						<ul>
							<li>Cart Sub Total <span>{amount}</span></li>
							<li>Eco Tax <span>$2</span></li>
							<li>Shipping Cost <span>Free</span></li>
							<li>Total <span>{`$${amount + 2}`}</span></li>
						</ul>
							<Link className="btn btn-default check_out" to="/checkout">Check Out</Link>
					</div>
				</div>
			
		    </div>
        </div>
	</section>
        </>
    )
}

export default CartPage;