import {Link} from 'react-router-dom';
import { useEffect, useState } from "react";
import * as categoryService from "../../services/categoryService";
import CategoriesNavigationElement from "./CategoryNavigationElement";

const CategoriesNavigationList =({categoryName, subCategories}) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
      categoryService.getAll().then((result) => {
        setCategories(result);
      });
    }, []);
    
    return (
        <ul className="nav navbar-nav collapse navbar-collapse">
        <li>
                    <Link to="/" className="active">
                      Home
                    </Link>
                  </li>
        {categories.length > 0 ? (
         categories.map(x => <li className='dropdown' key={x._id}><CategoriesNavigationElement  categoryTitle={x.title} subCategories={x.subCategories}/></li>)):
        <></>}
        </ul>
    )
}

//{categories.length > 0 ? (

export default CategoriesNavigationList;