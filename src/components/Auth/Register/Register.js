import { Link, useNavigate } from "react-router-dom";
import styles from "./Register.module.css";
import * as authService from "../../../services/authService";
import { Form, Button} from 'react-bootstrap';

const Register = () => {
  const navigate = useNavigate();


 
  const registerHandler = (e) => {
    e.preventDefault();


    let username = e.target[0].value;
    let email = e.target[3].value;
    let password = e.target[1].value;
    let confirmPassword = e.target[2].value;
    let firstName = e.target[4].value;
    let lastName = e.target[5].value;

    authService.register({username, email, password, confirmPassword, firstName, lastName})
    .then(authData => {
      if(Boolean(authData.Error))
      {
        console.error(authData.Error);
      } else {
        navigate('/dashboard')
      }
      
    });
  }
  return (
    <section className={styles.register}>

      <div className={styles.container}>
        <div className="row">
            <div className="signup-form">
              <h2>Sign Up</h2>
              <img src="https://res.cloudinary.com/hellios94/image/upload/v1638213618/Technostore/user_ie0xk8.png" className={styles.registerImg} alt="register"/>
              <Form  method="get" onSubmit={(e) => registerHandler(e)}>
              <Form.Group className={styles.formControl}>
                <Form.Label className={styles.required}>Username</Form.Label>
                <Form.Control 
                type="text" 
                name="username" 
                id="username" 
                required
                 />
            </Form.Group>
                
            <Form.Group className={styles.formControl}>
                <Form.Label className={styles.required}>Password</Form.Label>
                <Form.Control 
                type="password" 
                name="password" 
                id="password" 
                required
                 />
            </Form.Group>
            <Form.Group className={styles.formControl}>
                <Form.Label className={styles.required}>Confirm Password</Form.Label>
                <Form.Control 
                type="password" 
                name="confirmPassword" 
                id="confirmPassword" 
                required
                 />
            </Form.Group>
            <Form.Group className={styles.formControl}>
                <Form.Label className={styles.required}>Email</Form.Label>
                <Form.Control 
                type="email" 
                name="email" 
                id="email" 
                required
                 />
            </Form.Group>
            <Form.Group className={styles.formControl}>
                <Form.Label>First Name</Form.Label>
                <Form.Control 
                type="text" 
                name="firstName" 
                id="firstName" 
                 />
            </Form.Group>
            <Form.Group className={styles.formControl}>
                <Form.Label>Last Name</Form.Label>
                <Form.Control 
                type="text" 
                name="lastName" 
                id="lastName" 
                required
                 />
            </Form.Group>
            <Form.Group className={styles.formControl}>
            <Button variant="success" type="submit">Sign Up</Button>
            </Form.Group>
              </Form>
              <p className={styles.text}>
                If you have an account <Link to="/login">Sign In</Link>
              </p>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Register;
