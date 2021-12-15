import { Link } from "react-router-dom";
import styles from "./Register.module.css";

const Register = () => {
  return (
    <section className={styles.register}>
      <div className={styles.container}>
        <div className="row">
            <div className="signup-form">
              <h2>Sign Up</h2>
              <img src="https://res.cloudinary.com/hellios94/image/upload/v1638213618/Technostore/user_ie0xk8.png" className={styles.registerImg} alt="register"/>
              <form action="#">
                <div className={styles.formControl}>
                  <label className={styles.required}> Username</label>
                  <input type="text" id="username" name="username" />
                </div>
                <div className={styles.formControl}>
                  <label className={styles.required}> Email</label>
                  <input type="email" id="email" name="email" />
                </div>
                <div className={styles.formControl}>
                  <label className={styles.required}> Password</label>
                  <input type="password" id="password" name="password" />
                </div>
                <div className={styles.formControl}>
                  <label className={styles.required}> Confirm Password</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                  />
                </div>
                <div className={styles.formControl}>
                  <label> First Name</label>
                  <input type="text" id="firstName" name="firstName" />
                </div>
                <div className={styles.formControl}>
                  <label> Last Name</label>
                  <input type="text" id="lastName" name="lastName" />
                </div>
                <div className={styles.formControl}>
                  <label> Avatar</label>
                  <input type="file" id="avatar" name="avatar" />
                </div>
                <div className={styles.formControl}>
                  <button type="submit" className="btn btn-default">
                    Signup
                  </button>
                </div>
              </form>
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
