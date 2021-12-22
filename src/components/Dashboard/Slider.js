import {Link} from 'react-router-dom';
import styles from './Slider.module.css';

const Slider = () => {
    return (
        <section id="slider" className={styles.slider}>
		<div className="container">
			<div className="row">
				<div className="col-sm-12">
					<div id="slider-carousel" className="carousel slide" data-ride="carousel">
						<ol className="carousel-indicators">
							<li data-target="#slider-carousel" data-slide-to="0" className="active"></li>
							<li data-target="#slider-carousel" data-slide-to="1"></li>
							<li data-target="#slider-carousel" data-slide-to="2"></li>
						</ol>
						
						<div className="carousel-inner">
							<div className="item active">
								<div className="col-sm-6" style={{height: "500px"}}>
								<img src="https://res.cloudinary.com/hellios94/image/upload/v1639561291/Technostore/Techno_2_abazr5.png" className={styles.logo} alt="logo" />
									<h2>The best online store for technologies</h2>
									<p>Here you can find a lot of different kind of Laptops. We have Gamming Laptops, Laptops for work, Laptops for Everyday use and more.</p>
									<Link to="/category/61a5f90076464308d8e3a4a9" className="btn btn-default get">Get it now</Link>
								</div>
								<div className="col-sm-6">
									<img src="https://res.cloudinary.com/hellios94/image/upload/v1639062806/Technostore/lenovo-legion-5_yfkqbl.png" style={{marginTop: "90px"}} className="girl img-responsive" alt="Laptop" />
								</div>
							</div>
							<div className="item">
								<div className="col-sm-6" style={{height: "500px"}}>
								<img src="https://res.cloudinary.com/hellios94/image/upload/v1639561291/Technostore/Techno_2_abazr5.png" className={styles.logo} alt="logo" />
									<h2>The best online store for technologies</h2>
									<p>Here you can find a lot of different kind of Smartphons. We have Smartphones with very good camera, Smartphones with very good CPU, Smartphones for Everyday use and more. </p>
									<Link to="/category/61aa435b5b0150275cf0693d" className="btn btn-default get">Get it now</Link>
								</div>
								<div className="col-sm-6">
									<img src="https://res.cloudinary.com/hellios94/image/upload/c_scale,w_350/v1639480435/Technostore/8916577320990_jozv6b.png" style={{marginTop: "90px"}} className="girl img-responsive" alt="Smartphone" />
								</div>
							</div>
							
							<div className="item">
								<div className="col-sm-6" style={{height: "500px"}}>
								<img src="https://res.cloudinary.com/hellios94/image/upload/v1639561291/Technostore/Techno_2_abazr5.png" className={styles.logo} alt="logo" />
									<h2>The best online store for technologies</h2>
									<p>Here you can find a lot of different kind of Tablets. We have Tablets with large screens, Graphic Tablets, Tablets for Everyday use and more.</p>
									<Link to="/category/61aa435b5b0150275cf0693d" className="btn btn-default get">Get it now</Link>
								</div>
								<div className="col-sm-6">
									<img src="https://res.cloudinary.com/hellios94/image/upload/v1639480853/Technostore/wacom-pen-tablet-500x500_tig7vx.png" style={{marginTop: "90px"}} className="girl img-responsive" alt="Tablet" />
								</div>
							</div>
							
						</div>
						
						<Link to="#slider-carousel" onClick={(event) => event.preventDefault()} className="left control-carousel hidden-xs" data-slide="prev">
							<i className="fa fa-angle-left"></i>
						</Link>
						<Link to="#slider-carousel" onClick={(event) => event.preventDefault()} className="right control-carousel hidden-xs" data-slide="next">
							<i className="fa fa-angle-right"></i>
						</Link>
					</div>
					
				</div>
			</div>
		</div>
	</section>
    )
}

export default Slider;