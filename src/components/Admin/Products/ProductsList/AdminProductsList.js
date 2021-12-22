import {Card, Table, Button} from 'react-bootstrap';
import React, {useState, useEffect} from 'react';
import * as productService from '../../../../services/productService';
import {Link} from 'react-router-dom';
import Spinner  from '../../../Spinner/Spinner';
import styles from './AdminProductsList.module.css'
const AdminProductsList = () => {
    const [products, setProducts] = useState([]);
    const [isDeleted, setIsDeleted] = useState(false);

    useEffect(() => {
        productService.getAllProducts()
        .then(result => {
            console.log(result);
            setProducts(result);
        })
        setIsDeleted(false);
    },[isDeleted])


    const onclickDeleteButton = (e, product) => {
        e.preventDefault();
        productService.deleteProduct(product._id)
        .then(result => {
            setIsDeleted(true)
        })
    }



    if(products.length < 1) {
        return (<Spinner />)
    }
    return (
        <>
        <Card >
            <Card.Header className={styles.cardHeader}>

                <h1 className={styles.pageHeader}>
                    Products
                </h1>

                <Link to="create" className="btn btn-success">Create Product</Link>
            </Card.Header>
            <Card.Body>
                <Table striped bordered hover className={styles.table}>
                    <thead>
                        <tr className={styles.tableHeader}>
                            <th>Image</th>
                            <th>Model Name</th>
                            <th>Description</th>
                            <th>Sub Category</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                        {
                            products.map(x => 
                            <tr key={x._id} className={styles.actions}>
                                <td className={styles.text}><img src={x.imageUrl} alt={x.modelName} className={styles.image}/></td>
                                <td className={styles.text}>{x.modelName}</td>
                                <td className={styles.text}>{x.description}</td>
                                <td className={styles.text}>{x.subCategory.title}</td>
                                <td className={styles.text}>{x.price.toFixed(2)}</td>
                                <td className={styles.text}><Link to={`edit/${x._id}`} className="btn btn-warning">Edit</Link>
                                    <Button variant="danger" onClick={(e) => {onclickDeleteButton(e, x)}}>Delete</Button>
                                </td>
                            </tr>)
                        }
                    </thead>
                </Table>
            </Card.Body>
        </Card>
        </>
    )
}
    export default  AdminProductsList;