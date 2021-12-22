import {Link} from 'react-router-dom';
const CartPage = () => {
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
							<td className="description"></td>
							<td className="price">Price</td>
							<td className="quantity">Quantity</td>
							<td className="total">Total</td>
							<td></td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className="cart_product">
								<Link  onClick={(event) => event.preventDefault()} to=""><img src="images/cart/one.png" alt=""/></Link>
							</td>
							<td className="cart_description">
								<h4><Link  onClick={(event) => event.preventDefault()} to="">Colorblock Scuba</Link></h4>
								<p>Web ID: 1089772</p>
							</td>
							<td className="cart_price">
								<p>$59</p>
							</td>
							<td className="cart_quantity">
								<div className="cart_quantity_button">
									<Link className="cart_quantity_up" onClick={(event) => event.preventDefault()} to=""> + </Link>
									<input className="cart_quantity_input" type="text" name="quantity" value="1" autocomplete="off" size="2"/>
									<Link className="cart_quantity_down" onClick={(event) => event.preventDefault()} to=""> - </Link>
								</div>
							</td>
							<td className="cart_total">
								<p className="cart_total_price">$59</p>
							</td>
							<td className="cart_delete">
								<Link className="cart_quantity_delete" onClick={(event) => event.preventDefault()} to=""><i className="fa fa-times"></i></Link>
							</td>
						</tr>

						<tr>
							<td className="cart_product">
								<Link  onClick={(event) => event.preventDefault()} to=""><img src="images/cart/two.png" alt=""/></Link>
							</td>
							<td className="cart_description">
								<h4><Link  onClick={(event) => event.preventDefault()} to="">Colorblock Scuba</Link></h4>
								<p>Web ID: 1089772</p>
							</td>
							<td className="cart_price">
								<p>$59</p>
							</td>
							<td className="cart_quantity">
								<div className="cart_quantity_button">
									<Link className="cart_quantity_up" onClick={(event) => event.preventDefault()} to=""> + </Link>
									<input className="cart_quantity_input" type="text" name="quantity" value="1" autocomplete="off" size="2"/>
									<Link className="cart_quantity_down" onClick={(event) => event.preventDefault()} to=""> - </Link>
								</div>
							</td>
							<td className="cart_total">
								<p className="cart_total_price">$59</p>
							</td>
							<td className="cart_delete">
								<Link className="cart_quantity_delete" onClick={(event) => event.preventDefault()} to=""><i className="fa fa-times"></i></Link>
							</td>
						</tr>
						<tr>
							<td className="cart_product">
								<Link  onClick={(event) => event.preventDefault()} to=""><img src="images/cart/three.png" alt=""/></Link>
							</td>
							<td className="cart_description">
								<h4><Link  onClick={(event) => event.preventDefault()} to="">Colorblock Scuba</Link></h4>
								<p>Web ID: 1089772</p>
							</td>
							<td className="cart_price">
								<p>$59</p>
							</td>
							<td className="cart_quantity">
								<div className="cart_quantity_button">
									<Link className="cart_quantity_up" onClick={(event) => event.preventDefault()} to=""> + </Link>
									<input className="cart_quantity_input" type="text" name="quantity" value="1" autocomplete="off" size="2"/>
									<Link className="cart_quantity_down" onClick={(event) => event.preventDefault()} to=""> - </Link>
								</div>
							</td>
							<td className="cart_total">
								<p className="cart_total_price">$59</p>
							</td>
							<td className="cart_delete">
								<Link className="cart_quantity_delete" onClick={(event) => event.preventDefault()} to=""><i className="fa fa-times"></i></Link>
							</td>
						</tr>
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
							<li>Cart Sub Total <span>$59</span></li>
							<li>Eco Tax <span>$2</span></li>
							<li>Shipping Cost <span>Free</span></li>
							<li>Total <span>$61</span></li>
						</ul>
							<Link className="btn btn-default update" onClick={(event) => event.preventDefault()} to="">Update</Link>
							<Link className="btn btn-default check_out" onClick={(event) => event.preventDefault()} to="">Check Out</Link>
					</div>
				</div>
			
		    </div>
        </div>
	</section>
        </>
    )
}

export default CartPage;