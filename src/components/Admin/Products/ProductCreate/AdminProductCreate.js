import {Form, Button, FloatingLabel, Alert} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import styles from './AdminProductCreate.module.css';
import * as subCategoryService from '../../../../services/subCategoryService';
import * as productService from '../../../../services/productService';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../../Spinner/Spinner';
const AdminProductCreate = () => {
    const [validated, setValidated] = useState(false);
    const [subCategories, setSubCategories] = useState([]);
    const [file, setFile] = useState({});
    const [imageUrl, setImageUrl] = useState('');
    const [productData, setProductData] = useState({});
    const [toShow, setToShow] = useState([]);
    const [error, setError] = useState('');
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
        subCategoryService.getAll()
        .then(result => {
            setSubCategories(result)
        })

        if(Boolean(imageUrl))
        {
            console.log(imageUrl);
            productService.createProduct(
                productData, imageUrl
            ).then(result => {
                  navigate("/admin/products");
              })
              .catch(err => setError(err.Error));
        }
    }, [imageUrl])


  const handleSubmit = (event) => {
      const form = event.currentTarget;
      event.preventDefault();
      if (form.checkValidity() === false) {
        event.stopPropagation();
      }
      let formData = new FormData(event.currentTarget);
      let modelName = formData.get('modelName');
      let description = formData.get('description');
      let price = formData.get('price');
      let subCategory = formData.get('subCategory');
      let weight = formData.get('weight');
      let brand = formData.get('brand');
      let CPUModel = formData.get("CPUModel");
      let RAM = formData.get('RAM');
      let storageType = formData.get('storageType');
      let storage = formData.get('storage');
      let videoCardModel = formData.get('videoCardModel');
      let videoCardMemory = formData.get('videoCardMemory');
      let OS = formData.get('OS');
      let frontCamera = formData.get('frontCamera');
      let backCamera = formData.get('backCamera');
      let Display = formData.get('Display');
      let USB = formData.get('USB');
      let HDMI = formData.get('HDMI');
      let ports = formData.get('ports');
      let battery = formData.get('batery');
      let sizes = formData.get('sizes');
      let cabelLength = formData.get('cabelLength');
      let type = formData.get('type');
      let touchScreen = formData.get('touchScreen');
      let haveLights = formData.get('haveLights');
      let numberOfButtons = formData.get('numberOfButtons');
      let haveNumpad = formData.get('haveNumpad');
      let isSmart = formData.get('isSmart');

      setFile(formData.get('imageUrl'));

      setProductData({modelName, description, price, subCategory, weight, brand, CPUModel, RAM, storageType, storage,
    videoCardModel, videoCardMemory, OS, frontCamera, backCamera, Display, USB, HDMI, ports, battery, sizes,
    cabelLength, type, touchScreen, haveLights, numberOfButtons, haveNumpad, isSmart})

     addToCloudinary()
      setValidated(true);
    };

    const onChangeSubCategory = (e) => {
        switch(e.currentTarget.options[e.currentTarget.selectedIndex].text) {
            case "Laptops": {
                setToShow([
                    "RAM", 'CPUModel' , 'storageType', 'storage' ,'OS', 'videoCardModel', 'videoCardMemory', 'weight',
                    'Display', 'USB', 'HDMI', 'ports', 'battery', 'sizes'
                ]);
                break;
            }
            case "Computers": {
                setToShow([
                    "RAM", 'CPUModel' , 'storageType', 'storage' ,'OS', 'videoCardModel', 'videoCardMemory', 'weight',
                     'USB', 'HDMI', 'ports', 'sizes'
                ]);
                break;
            }
            case 'Smartphones': {
                setToShow([
                    "RAM", 'storage' ,'OS', 'frontCamera', 'backCamera', 'weight',
                    'Display', 'USB', 'battery'
                ]);
                break;
            }
            case 'Tablets': {
                setToShow([
                    "RAM", 'storage' ,'OS', 'frontCamera', 'backCamera', 'weight',
                    'Display', 'USB', 'battery'
                ]);
                break;
            }
            case 'Monitors': {
                setToShow([
                    'weight', 'Display', 'USB', 'HDMI', 'ports', 'type', 'touchScreen'
                ]);
                break;
            }
            case 'TVs': {
                setToShow([
                    'weight', 'Display', 'USB', 'HDMI', 'ports', 'type', 'isSmart'
                ]);
                break;
            }
            case 'Keyboards' : {
                setToShow([
                    'weight', 'haveNumpad', 'USB', 'sizes', 'cabelLength', 'type', 'haveLights'
                ]);
                break;
            }
            case 'Mice' : {
                setToShow([
                    'weight', 'numberOfButtons', 'USB', 'sizes', 'cabelLength', 'type', 'haveLights'
                ]);
                break;
            }
            case 'Headsets' : {
                setToShow([
                    'weight', 'USB', 'sizes', 'cabelLength', 'type', 'haveLights'
                ]);
                break;
            }

            default: {
                break;
            }
        }
    }

    if(subCategories.length < 1)
    {
        <Spinner />
    }

    return (
        <>
        {Boolean(error) ? <Alert variant="danger">
            {error}
        </Alert> : <></> }
            <h1 className={styles.title}>Create Product</h1>
        <div className={styles.createForm}>
            
        <Form validated={validated} method="POST" onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Model Name</Form.Label>
                <Form.Control 
                type="text" 
                name="modelName" 
                id="modelName" 
                required
                minLength="3"
                maxLength="200" />
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
            <FloatingLabel controlId="floatingSelect" label="SubCategory" />
            <Form.Select aria-label="Floating label select example" 
            onChange={(e) => onChangeSubCategory(e)} name="subCategory">
                {subCategories.map(x => 
                    <option key={x._id} value={x._id}>{x.title}</option>
                )}
            </Form.Select>
            <Form.Group className="mb-3">
                <Form.Label>Brand</Form.Label>
                <Form.Control 
                type="text" 
                name="brand" 
                id="brand" 
                required
                minLength="5"
                maxLength="50" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control 
                type="number"
                step=".01"
                name="price" 
                id="price" 
                required
                min="1"
                max="4000" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Weight</Form.Label>
                <Form.Control 
                type="number" 
                step=".01"
                name="weight" 
                id="weight" 
                required
                min="0"
                max="10" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Image</Form.Label>
                <Form.Control 
                type="file" 
                name="imageUrl" 
                id="imageUrl" 
                required
                 />
            </Form.Group>
            <Form.Group className={!toShow.includes('CPUModel') ? styles.hidden : "mb-3"}>
                <Form.Label>CPU Model</Form.Label>
                <Form.Control 
                type="text" 
                name="CPUModel" 
                id="CPUModel" 
                />
            </Form.Group>
            <Form.Group className={!toShow.includes('RAM') ? styles.hidden : "mb-3"}>
                <Form.Label>RAM</Form.Label>
                <Form.Control 
                type="text" 
                name="RAM" 
                id="RAM" 
                
                />
            </Form.Group>
            <Form.Group className={!toShow.includes('storageType') ? styles.hidden : "mb-3"}>
                <Form.Label>Storage Type</Form.Label>
                <Form.Control 
                type="text" 
                name="storageType" 
                id="storageType" 

                />
            </Form.Group>
            <Form.Group className={!toShow.includes('storage') ? styles.hidden : "mb-3"}>
                <Form.Label>Storage</Form.Label>
                <Form.Control 
                type="text" 
                name="storage" 
                id="storage" 
                />
            </Form.Group>
            <Form.Group className={!toShow.includes('videoCardModel') ? styles.hidden : "mb-3"}>
                <Form.Label>Video Card Model</Form.Label>
                <Form.Control 
                type="text" 
                name="videoCardModel" 
                id="videoCardModel" 
                />
            </Form.Group>
            <Form.Group className={!toShow.includes('videoCardMemory') ? styles.hidden : "mb-3"}>
                <Form.Label>Video Card Memory</Form.Label>
                <Form.Control 
                type="number" 
                name="videoCardMemory" 
                id="videoCardMemory" 
                />
            </Form.Group>
            <Form.Group className={!toShow.includes('OS') ? styles.hidden : "mb-3"}>
                <Form.Label>OS</Form.Label>
                <Form.Control 
                type="text" 
                name="OS" 
                id="OS" 
                />
            </Form.Group>
            <Form.Group className={!toShow.includes('frontCamera') ? styles.hidden : "mb-3"}>
                <Form.Label>Front Camera</Form.Label>
                <Form.Control 
                type="number" 
                name="frontCamera" 
                id="frontCamera" 
                />
            </Form.Group>
            <Form.Group className={!toShow.includes('backCamera') ? styles.hidden : "mb-3"}>
                <Form.Label>Back Camera</Form.Label>
                <Form.Control 
                type="number" 
                name="backCamera" 
                id="backCamera" 
                />
            </Form.Group>
            <Form.Group className={!toShow.includes('Display') ? styles.hidden : "mb-3"}>
                <Form.Label>Display</Form.Label>
                <Form.Control 
                type="text" 
                name="Display" 
                id="Display" 
                />
            </Form.Group>
            <Form.Group className={!toShow.includes('USB') ? styles.hidden : "mb-3"}>
                <Form.Label>USB</Form.Label>
                <Form.Control 
                type="text" 
                name="USB" 
                id="USB" 
                />
            </Form.Group>
            {/* //TODO: Make radio buttons for Booleans */}
            <Form.Group className={!toShow.includes('ports') ? styles.hidden : "mb-3"}>
                <Form.Label>Ports</Form.Label>
                <Form.Control 
                type="text" 
                name="ports" 
                id="ports" 
                
                />
            </Form.Group>
            <Form.Group className={!toShow.includes('battery') ? styles.hidden : "mb-3"}>
                <Form.Label>Battery</Form.Label>
                <Form.Control 
                type="text" 
                name="battery" 
                id="battery" 
                
                />
            </Form.Group>
            <Form.Group className={!toShow.includes('sizes') ? styles.hidden : "mb-3"}>
                <Form.Label>Sizes</Form.Label>
                <Form.Control 
                type="text" 
                name="sizes" 
                id="sizes" 
                
                />
            </Form.Group>
            <Form.Group className={!toShow.includes('cabelLength') ? styles.hidden : "mb-3"}>
                <Form.Label>Cabel Length</Form.Label>
                <Form.Control 
                type="number" 
                step=".01"
                name="cabelLength" 
                id="cabelLength" 
                
                />
            </Form.Group>
            <Form.Group className={!toShow.includes('type') ? styles.hidden : "mb-3"}>
                <Form.Label>Type</Form.Label>
                <Form.Control 
                type="text" 
                name="type" 
                id="type" 
                
                />
            </Form.Group>
            <Form.Group className={!toShow.includes('numberOfButtons') ? styles.hidden : "mb-3"}>
                <Form.Label>Number Of Buttons</Form.Label>
                <Form.Control 
                type="number" 
                name="numberOfButtons" 
                id="numberOfButtons" 
                
                />
            </Form.Group>
            <div className={!toShow.includes('HDMI') ? styles.hidden : "mb-3"}>
            <FloatingLabel controlId="floatingSelect" label="HDMI" />
            <div className={styles.radioButtons}>
           <Form.Check
            type='radio'
            name="HDMI"
            value={false}
            label="No"
            id="HDMI"
            />
            <Form.Check
            type='radio'
            name="HDMI"
            value={true}
            label="Yes"
            id="HDMI"

            />
            </div>
            </div>
            <div className={!toShow.includes('touchScreen') ? styles.hidden : 'mb-3'}>
            <FloatingLabel controlId="floatingSelect" label="Touch Screen" />
            <div className={styles.radioButtons}>
            <Form.Check
            
            type='radio'
            name="touchScreen"
            value={false}
            label="No"
            id="touchScreen"

            />
            <Form.Check
            
            type='radio'
            name="touchScreen"
            value={true}
            label="Yes"
            id="touchScreen"

            />
            </div>
            </div>
            <div className={!toShow.includes('haveLights') ? styles.hidden : 'mb-3'}>
            <FloatingLabel controlId="floatingSelect" label="Have Lights" />
            <div className={styles.radioButtons}>
            <Form.Check
            
            type='radio'
            name="haveLights"
            value={false}
            label="No"
            id="haveLights"
            />
            <Form.Check
            
            type='radio'
            name="haveLights"
            value={true}
            label="Yes"
            id="haveLights"
            />
            </div>
            </div>
            <div className={!toShow.includes('haveNumpad') ? styles.hidden : 'mb-3'}>
            <FloatingLabel controlId="floatingSelect" label="Have Numpad" />
            <div className={styles.radioButtons}>
            <Form.Check
            
            type='radio'
            name="haveNumpad"
            value={false}
            label="No"
            id="haveNumpad"
            />
            <Form.Check
            
            type='radio'
            name="haveNumpad"
            value={true}
            label="Yes"
            id="haveNumpad"
            />
            </div>
            </div>
            <div className={!toShow.includes('isSmart') ? styles.hidden : 'mb-3'}>
            <FloatingLabel controlId="floatingSelect" label="Is Smart" />
            <div className={styles.radioButtons}>
            <Form.Check
            
            type='radio'
            name="isSmart"
            value={false}
            label="No"
            id="isSmart"
            />
            <Form.Check
            
            type='radio'
            name="isSmart"
            value={true}
            label="Yes"
            id="isSmart"
            />
            </div>
            </div>
            <Button type="submit">Create Product</Button>
        </Form>
        </div>
        </>
    ) 
};

export default AdminProductCreate;