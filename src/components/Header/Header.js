import { Link } from "react-router-dom";
import styles from './Header.module.css';
import { useAuthContext } from "../../context/AuthContext";
import { useCartContext } from "../../context/CartContext";
import './Header.css';

import CategoriesNavigationList from "./CategoriesNavigationList";

const Header = () => {

  const {user, isAuthenticated} = useAuthContext();
  const {cart} = useCartContext(); 

  if(isAuthenticated) {
    return (
      <header id="header" className={styles.header}>
        <div className="header-bottom">
          <div className="container">
            <div className="row rowHeader">
              <div className="col-md-9">
                <div className="mainmenu pull-left">
                  <CategoriesNavigationList/>
                </div>
                </div>
  
              
              <div className="col-md-3">
                <div className="shop-menu clearfix pull-right">
                  <ul className="nav navbar-nav">
                    <li>
                      <Link to="/" onClick={(e) => e.preventDefault()} className="user">
                        <i className="fa fa-user"></i> {user.username}
                      </Link>
                      </li>
                      <li>
                      <Link to="/cart" className="cart">
                      <i data-count={cart.products.length} class="fa fa-shopping-cart fa-5x fa-border icon-grey badge"></i>
                      </Link>
                      </li>
                      <li>
                      <Link to="/logout" className={styles.login}>
                      <i className="fa fa-arrow-circle-down"></i> Logout
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          </div>
      </header>
    );
  }

  return (
    <header id="header" className={styles.header}>
      <div className="header-bottom">
        <div className="container">
          <div className="row rowHeader">
            <div className="col-md-10">
              <div className="mainmenu pull-left">
                <CategoriesNavigationList/>
              </div>
              </div>

            
            <div className="col-md-2">
              <div className="shop-menu clearfix pull-right">
                <ul className="nav navbar-nav">
                  <li>
                    <Link to="/login" className={styles.login}>
                      <i className="fa fa-lock"></i> Login
                    </Link>
                  </li>
                  <li>
                  <Link to="/register" className={styles.login}>
                      <i className="fa fa-plus-circle"></i> Register
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        </div>
    </header>
  );
};

export default Header;
