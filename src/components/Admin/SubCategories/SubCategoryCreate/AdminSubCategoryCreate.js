import {Form, Button, FloatingLabel} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import styles from './AdminSubCategoryCreate.module.css';
import * as subCategoryService from '../../../../services/subCategoryService';
import * as categoryService from '../../../../services/categoryService';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../../Spinner/Spinner';

const AdminSubCategoryCreate = () => {
    const [validated, setValidated] = useState(false);
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        categoryService.getAll()
        .then(result => {
            setCategories(result)
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

      subCategoryService.createSubCategory({
          title, 
          description, 
          category
        }).then(result => {
            console.log('')
            navigate('/admin/subcategories')
        })

      setValidated(true);
    };

    if(categories.length < 1)
    {
        <Spinner />
    }

    return (
        <>
            <h1 className={styles.title}>Create SubCategory</h1>
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
                maxLength="50" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control 
                type="text" 
                name="description" 
                id="description" 
                required
                minLength="25"
                maxLength="250" />
            </Form.Group>
            <FloatingLabel controlId="floatingSelect" label="Category" />
            <Form.Select aria-label="Floating label select example" name="category">
                {categories.map(x => 
                    <option key={x._id} value={x._id}>{x.title}</option>
                )}
            </Form.Select>
            <Button type="submit">Create SubCategory</Button>
        </Form>
        </div>
        </>
    ) 
}

export default AdminSubCategoryCreate