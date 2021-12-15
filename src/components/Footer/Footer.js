import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <p className="pull-left">
              Copyright © 2021 Technostore All rights reserved.
            </p>
            <p className="pull-right">
              Designed by{" "}
              <span>
                <Link target="_blank" to="http://www.themeum.com">
                  Themeum
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
