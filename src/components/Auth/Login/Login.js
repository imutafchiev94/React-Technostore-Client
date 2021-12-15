import { Link } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <section className={styles.login}>
      <div className={styles.container}>
        <div className="row">
          <div className="login-form">
            <h2>Login to your account</h2>
            <img src="https://res.cloudinary.com/hellios94/image/upload/v1638213618/Technostore/user_ie0xk8.png" className={styles.loginImg} alt="login"/>
            <form action="#">
              <div className={styles.formControl}>
                <label className={styles.required}>Username</label>
                <input type="text" id="username" name="username" />
              </div>
              <div className={styles.formControl}>
                <label className={styles.required}>Password</label>
                <input type="password" id="password" name="password" />
              </div>
              <div className={styles.formControl}>
                <button type="submit" className="btn btn-default">
                  Login
                </button>
              </div>
            </form>

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
