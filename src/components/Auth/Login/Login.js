import { Link, useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import {Form, Button} from 'react-bootstrap';
import { useAuthContext } from "../../../context/AuthContext";
import * as authService from '../../../services/authService';

const Login = () => {
  const navigate = useNavigate();
  const {login, user} = useAuthContext();

  const onLoginHandler = (e) => {
    e.preventDefault();

    let username = e.target[0].value;
    let password = e.target[1].value

    authService.login({username, password})
    .then(authData => {
      if(Boolean(authData.Error)) {
        console.error(authData.Error)
      } else {
        login(authData);
        navigate('/');
      }
    })
  }

  return (
    <section className={styles.login}>
      <div className={styles.container}>
        <div className="row">
          <div className="login-form">
            <h2>Login to your account</h2>
            <img src="https://res.cloudinary.com/hellios94/image/upload/v1638213618/Technostore/user_ie0xk8.png" className={styles.loginImg} alt="login"/>
            <Form  method="get" onSubmit={(e) => onLoginHandler(e)}>
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
            <Button variant="success" type="submit">Login</Button>
            </Form.Group>
              </Form>

            <p className={styles.text}>
              If you haven't an account <Link to="/register">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
