import { Link } from "react-router-dom";
import styles from './Header.module.css';

import CategoriesNavigationList from "./CategoriesNavigationList";

const Header = () => {
  return (
    <header id="header" className={styles.header}>
      <div className="header-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="mainmenu pull-left">
                <CategoriesNavigationList/>
              </div>
              </div>
            <div className="col-md-1">
              <div className="search_box pull-left">
                <input type="text" placeholder="Search" />
              </div>
            </div>
            
            <div className="col-md-6">
              <div className="shop-menu clearfix pull-right">
                <ul className="nav navbar-nav">
                  <li>
                    <Link to="/login" className={styles.login}>
                      <i className="fa fa-lock"></i> Login
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
