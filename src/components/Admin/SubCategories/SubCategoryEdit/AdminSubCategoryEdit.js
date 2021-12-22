import {Form, Button, FloatingLabel} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import styles from './AdminSubCategoryEdit.module.css';
import * as subCategoryService from '../../../../services/subCategoryService';
import * as categoryService from '../../../../services/categoryService';
import { useNavigate, useParams } from 'react-router-dom';
import Spinner from '../../../Spinner/Spinner';

const AdminSubCategoryEdit = () => {
    const [validated, setValidated] = useState(false);
    const [subCategory, setSubCategory] = useState({});
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();
    const {subCategoryId} = useParams();
    
    useEffect(() => {
        categoryService.getAll()
        .then(result => {
            setCategories(result)
        })
        subCategoryService.getSubCategory(subCategoryId)
        .then(result => {
            setSubCategory(result);
        })
    }, [])

  const handleSubmit = (event) => {
      const form = event.currentTarget;
      event.preventDefault();
      if (form.checkValidity() === false) {
        event.stopPropagation();
      }
      let formData = new FormData(event.currentTarget);
      let title = formData.get('title');
      let description = formData.get('description');
      let category = formData.get('category');
      console.log(category);

      subCategoryService.editSubCategory(subCategoryId, {
          title, 
          description, 
          category
        }).then(result => {
            navigate('/admin/subcategories')
        })

      setValidated(true);
    };

    if(Object.keys(subCategory).length < 1)
    {
        console.log(Object.keys(subCategory).length);
       return(<Spinner />)
    }
    
    return (
        <>
            <h1 className={styles.title}>Edit SubCategory</h1>
        <div className={styles.createForm}>
            
        <Form validated={validated} method="POST" onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control 
                type="text" 
                name="title" 
                id="title" 
                required
                minLength="3"
                maxLength="50"
                defaultValue={subCategory.title} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control 
                type="text" 
                name="description" 
                id="description" 
                required
                minLength="25"
                maxLength="250"
                defaultValue={subCategory.description} />
            </Form.Group>
            <FloatingLabel controlId="floatingSelect" label="Category" />
            <Form.Select aria-label="Floating label select example" name="category">
                {categories.map(x =>
                    subCategory.category._id === x._id ?
                    <option key={x._id} value={x._id} selected={true}>{x.title}</option>
                    : <option key={x._id} value={x._id}>{x.title}</option>
                    )}
            </Form.Select>
            <Button type="submit">Edit SubCategory</Button>
        </Form>
        </div>
        </>
    )
}
export default AdminSubCategoryEdit;