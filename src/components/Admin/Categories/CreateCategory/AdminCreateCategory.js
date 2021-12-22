import {Form, Button} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import styles from './AdminCreateCategory.module.css';
import * as categoryService from '../../../../services/categoryService';
import { useNavigate } from 'react-router-dom';

const AdminCreateCategory = () => {
    const [validated, setValidated] = useState(false);
    const [file, setFile] = useState({})
    const [imageUrl, setImageUrl] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    let addToCloudinary = () => {
        const API_ENDPOINT = 'https://api.cloudinary.com/v1_1/hellios94/upload';

        const fileData = new FormData();
        fileData.append('file', file);
        fileData.append('upload_preset', 'tecnho_store');

        fetch(API_ENDPOINT, {
            method: 'POST',
            body: fileData
        }).then(response => response.json())
            .then(data => setImageUrl(data.url))
            .catch(error => console.error('Error:', error))
      }
    
      useEffect(() => {
          if(imageUrl !== "")
          {
            categoryService.create({
                title,
                description,
                imageUrl
            }).then(result => {
                navigate('/admin/categories')
                
            })
          }
      }, [imageUrl])

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
          event.stopPropagation();
        }
        let formData = new FormData(event.currentTarget);
        setTitle(formData.get('title'));
        setDescription(formData.get('description'));
        setFile(formData.get('imageUrl'));
        
        setTimeout(
            addToCloudinary(), 1000
        )
        setValidated(true);
      };

     
    return (
            <>
            <h1 className={styles.title}>Create Category</h1>
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
            <Form.Group className="mb-3">
                <Form.Label>ImageUrl</Form.Label>
                <Form.Control 
                type="file" 
                name="imageUrl" 
                id="imageUrl" />
            </Form.Group>
            <Button type="submit">Create Category</Button>
        </Form>
        </div>
        </>
    )
};

export default AdminCreateCategory