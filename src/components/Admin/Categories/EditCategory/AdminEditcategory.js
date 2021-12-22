import {Form, Button} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import styles from './AdminEditCategory.module.css';
import * as categoryService from '../../../../services/categoryService';
import Spinner from '../../../Spinner/Spinner';
import { useNavigate, useParams } from 'react-router-dom';

const AdminEditCategory = () => {
    const [validated, setValidated] = useState(false);
    const [category, setCategory] = useState({});
    const {categoryId} = useParams();
    const navigate = useNavigate();
    useEffect(() => {   
        categoryService.getCategory(categoryId)
        .then(result => {
            setCategory(result);
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
      
      categoryService.editCategory(categoryId, {
        title,
        description,
    }).then(result => {
        navigate('/admin/categories')
        
    })
      setValidated(true);
    };

    if(Object.keys(category).length < 1) {
        return (<Spinner />)
    }
    return (
        <>
        <h1 className={styles.title}>Create Category</h1>
        <div className={styles.editForm}>
            
        <Form validated={validated} method="POST" onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control 
                type="text" 
                name="title" 
                id="title" 
                required
                defaultValue={category.title}
                minLength="3"
                maxLength="50" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control 
                type="text" 
                name="description" 
                id="description" 
                defaultValue={category.description}
                required
                minLength="25"
                maxLength="250" />
            </Form.Group>
           
            <Button type="submit">Edit Category</Button>
        </Form>
        </div>
        </>
    )
}

export default AdminEditCategory;