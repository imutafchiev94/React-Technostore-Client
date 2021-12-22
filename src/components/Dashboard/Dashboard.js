import LatestProductsList from '../LatestProducts/LatestProductsList';
import MostRatedProductsList from '../MostRatedProducts/MostRatedProoductList';

import AboutUs from './AboutUs';
import Slider from './Slider';

const Dashboard = () => {
    return (
        <>
	<Slider/>
	<MostRatedProductsList/>
	<AboutUs/>
	<LatestProductsList/>
	
        </>
    )
}

export default Dashboard