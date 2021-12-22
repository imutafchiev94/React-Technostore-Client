import {Link} from 'react-router-dom';

const CheckOutPage = () => {
    return (
        <section id="cart_items">
		<div className="container">
			<div className="breadcrumbs">
				<ol className="breadcrumb">
				  <li><Link onClick={(event) => event.preventDefault()} to="#">Home</Link></li>
				  <li className="active">Check out</li>
				</ol>
			</div>

			<div className="step-one">
				<h2 className="heading">Step1</h2>
			</div>
			<div className="checkout-options">
				<h3>New User</h3>
				<p>Checkout options</p>
				<ul className="nav">
					<li>
						<label><input type="checkbox"/> Register Account</label>
					</li>
					<li>
						<label><input type="checkbox"/> Guest Checkout</label>
					</li>
					<li>
						<Link onClick={(event) => event.preventDefault()} to=""><i className="fa fa-times"></i>Cancel</Link>
					</li>
				</ul>
			</div>

			<div className="register-req">
				<p>Please use Register And Checkout to easily get access to your order history, or use Checkout as Guest</p>
			</div>

			<div className="shopper-informations">
				<div className="row">
					<div className="col-sm-3">
						<div className="shopper-info">
							<p>Shopper Information</p>
							<form>
								<input type="text" placeholder="Display Name"/>
								<input type="text" placeholder="User Name"/>
								<input type="password" placeholder="Password"/>
								<input type="password" placeholder="Confirm password"/>
							</form>
							<Link className="btn btn-primary" onClick={(event) => event.preventDefault()} to="">Get Quotes</Link>
							<Link className="btn btn-primary" onClick={(event) => event.preventDefault()} to="">Continue</Link>
						</div>
					</div>
					<div className="col-sm-5 clearfix">
						<div className="bill-to">
							<p>Bill To</p>
							<div className="form-one">
								<form>
									<input type="text" placeholder="Company Name"/>
									<input type="text" placeholder="Email*"/>
									<input type="text" placeholder="Title"/>
									<input type="text" placeholder="First Name *"/>
									<input type="text" placeholder="Middle Name"/>
									<input type="text" placeholder="Last Name *"/>
									<input type="text" placeholder="Address 1 *"/>
									<input type="text" placeholder="Address 2"/>
								</form>
							</div>
							<div className="form-two">
								<form>
									<input type="text" placeholder="Zip / Postal Code *"/>
									<select>
										<option>-- Country --</option>
										<option>United States</option>
										<option>Bangladesh</option>
										<option>UK</option>
										<option>India</option>
										<option>Pakistan</option>
										<option>Ucrane</option>
										<option>Canada</option>
										<option>Dubai</option>
									</select>
									<select>
										<option>-- State / Province / Region --</option>
										<option>United States</option>
										<option>Bangladesh</option>
										<option>UK</option>
										<option>India</option>
										<option>Pakistan</option>
										<option>Ucrane</option>
										<option>Canada</option>
										<option>Dubai</option>
									</select>
									<input type="password" placeholder="Confirm password"/>
									<input type="text" placeholder="Phone *"/>
									<input type="text" placeholder="Mobile Phone"/>
									<input type="text" placeholder="Fax"/>
								</form>
							</div>
						</div>
					</div>
					<div className="col-sm-4">
						<div className="order-message">
							<p>Shipping Order</p>
							<textarea name="message"  placeholder="Notes about your order, Special Notes for Delivery" rows="16"></textarea>
							<label><input type="checkbox"/> Shipping to bill address</label>
						</div>	
					</div>					
				</div>
			</div>
			<div className="review-payment">
				<h2>Review & Payment</h2>
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
								<Link onClick={(event) => event.preventDefault()} to=""><img src="images/cart/one.png" alt=""/></Link>
							</td>
							<td className="cart_description">
								<h4><Link onClick={(event) => event.preventDefault()} to="">Colorblock Scuba</Link></h4>
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
								<Link onClick={(event) => event.preventDefault()} to=""><img src="images/cart/two.png" alt=""/></Link>
							</td>
							<td className="cart_description">
								<h4><Link onClick={(event) => event.preventDefault()} to="">Colorblock Scuba</Link></h4>
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
								<Link onClick={(event) => event.preventDefault()} to=""><img src="images/cart/three.png" alt=""/></Link>
							</td>
							<td className="cart_description">
								<h4><Link onClick={(event) => event.preventDefault()} to="">Colorblock Scuba</Link></h4>
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
							<td colspan="4">&nbsp;</td>
							<td colspan="2">
								<table className="table table-condensed total-result">
									<tr>
										<td>Cart Sub Total</td>
										<td>$59</td>
									</tr>
									<tr>
										<td>Exo Tax</td>
										<td>$2</td>
									</tr>
									<tr className="shipping-cost">
										<td>Shipping Cost</td>
										<td>Free</td>										
									</tr>
									<tr>
										<td>Total</td>
										<td><span>$61</span></td>
									</tr>
								</table>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className="payment-options">
					<span>
						<label><input type="checkbox"/> Direct Bank Transfer</label>
					</span>
					<span>
						<label><input type="checkbox"/> Check Payment</label>
					</span>
					<span>
						<label><input type="checkbox"/> Paypal</label>
					</span>
				</div>
		</div>
	</section> 
    ) 
}

export default CheckOutPage;