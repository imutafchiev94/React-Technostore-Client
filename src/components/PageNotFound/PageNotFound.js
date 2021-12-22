import {Link} from 'react-router-dom'
import Spinner from '../Spinner/Spinner';

const PageNotFound = () => {
    return (
		
        <div className="container text-center">
		<div className="content-404">
			<img src="https://res.cloudinary.com/hellios94/image/upload/v1639558646/Technostore/7381254_oiwa1y.png" className="img-responsive" alt="" />
			<h1><b>OPPS!</b> We Couldn’t Find this Page</h1>
			<p>Uh... So it looks like you brock something. The page you are looking for has up and Vanished.</p>
			<h2><Link to="/">Bring me back Home</Link></h2>
		</div>
	</div>
    )
}

export default PageNotFound;