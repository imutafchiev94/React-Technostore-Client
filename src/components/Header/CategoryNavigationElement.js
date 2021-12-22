import {Link} from 'react-router-dom';
const CategoryNavigationElement = ({categoryTitle, subCategories}) => {
    return (
        <>
        <Link to='/'>{categoryTitle}<i className="fa fa-angle-down"></i></Link>
        {subCategories.length > 0 ?
        <ul role="menu" className="sub-menu">
            {subCategories.map(x => <li key={x._id }><Link to={`/category/${x._id}`}>{x.title}</Link></li>)}
            
        </ul> :
        <></>}
        </>
    )
}
export default CategoryNavigationElement;