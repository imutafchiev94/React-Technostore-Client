import {Form, FloatingLabel, Button} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import styles from './CheckOutPage.module.css';
import * as orderService from '../../services/orderService';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';
import { useCartContext } from '../../context/CartContext';
import Spinner from '../Spinner/Spinner';

const CheckOutPage = () => {


    const navigate = useNavigate();
	const {user} = useAuthContext();
	const {cart, clearCart} = useCartContext();
    const [countries, setCountries] = useState([]);
	const [cities, setCities] = useState([]); 
	const [amount, setAmount] = useState(0);


	useEffect(() => {
		fetch('https://api.countrystatecity.in/v1/countries', {method: "GET", headers: {
			'X-CSCAPI-KEY': 'Y1B0R0l0Zk1GeU5HdlFIdFJSOVhZRjczNUtadlExek5ZUFBudFFUVA=='
		}}).then(res => res.json())
		.then(result => 
				setCountries(result)
			);

			console.log(user);
		let sum = 0;
		for (let i = 0; i < cart.products.length; i++) {
			sum += cart.products[i].price;
		}
		setAmount(sum);
		
	}, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        let formData = new FormData(event.currentTarget);
        
		let firstName = formData.get('firstName');
		let lastName = formData.get('lastName');
		let country = formData.get('country');
		let city = formData.get('city');
		let address = formData.get('address');

		orderService.create({firstName, lastName, country, city, address, amount}, cart.products, user.acessToken)
		.then(result => {
			clearCart();
			navigate('/');
		}).catch(err => {
			clearCart();
			navigate('/');
		}) 
      };

	  const getCities = (e) => {
		  let country = e.currentTarget.value;

		  fetch(` https://api.countrystatecity.in/v1/countries/${country}/cities`, {method: "GET", headers: {
			'X-CSCAPI-KEY': 'Y1B0R0l0Zk1GeU5HdlFIdFJSOVhZRjczNUtadlExek5ZUFBudFFUVA=='
		}}).then(res => res.json())
		.then(result => {
				setCities(result)
		});
	  }

     if(countries.length < 1)
	 {
		 return(<Spinner />)
	 }

    return (
            <>
            <h1 className={styles.title}>Create Category</h1>
        <div className={styles.createForm}>
            
        <Form  method="POST" onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control 
                type="text" 
                name="firstName" 
                id="firstName" 
                required
                 />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control 
                type="text" 
                name="lastName" 
                id="lastName" 
                required
                />
            </Form.Group>
			<FloatingLabel controlId="floatingSelect" label="Country" />
            <Form.Select aria-label="Floating label select example" onChange={getCities} name="country">
				<option value="0">Please Select Country</option>
                {countries.map(x => 
                    <option key={x.id} value={x.iso2}>{x.name}</option>
                )}
            </Form.Select>
			<FloatingLabel controlId="floatingSelect" label="City" />
			<Form.Select aria-label="Floating label select example" name="city">
                {cities.map(x => 
                    <option key={x.id} value={x.name}>{x.name}</option>
                )}
            </Form.Select>
			<Form.Group className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control 
                type="text" 
                name="address" 
                id="address" 
                required
                />
			</Form.Group>
            <Button type="submit">Create Order</Button>
        </Form>
        </div>
        </>
    )
};

export default CheckOutPage