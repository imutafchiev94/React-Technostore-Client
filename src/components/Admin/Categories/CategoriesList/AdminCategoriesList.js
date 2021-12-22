import {Card, Table, Button} from 'react-bootstrap';
import React, {useState, useEffect} from 'react';
import * as categoryService from '../../../../services/categoryService';
import {Link} from 'react-router-dom';
import Spinner  from '../../../Spinner/Spinner';
import styles from './AdmiCategoriesList.module.css'
 
;
const AdminCategoriesList = () => {
    const [categories, setCategories] = useState([]);
    const [isDeleted, setIsDeleted] = useState(false);

    useEffect(() => {
        categoryService.getAll()
        .then(result => {
            setCategories(result);
        })

    },[isDeleted])


    const onclickDeleteButton = (e, category) => {
        e.preventDefault();
        categoryService.deleteCategory(category._id)
        .then(result => {
            setIsDeleted(true)
        })
    }



    if(Object.keys(categories).length < 1) {
        return (<Spinner />)
    }
    return (
        <>
        <Card >
            <Card.Header className={styles.cardHeader}>

                <h1 className={styles.pageHeader}>
                    Categories
                </h1>

                <Link to="create" className="btn btn-success">Create Category</Link>
            </Card.Header>
            <Card.Body>
                <Table striped bordered hover className={styles.table}>
                    <thead>
                        <tr className={styles.tableHeader}>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                        {
                            categories.map(x => 
                            <tr key={x._id} className={styles.actions}>
                                <td>{x.title}</td>
                                <td>{x.description}</td>
                                <td><Link to={`edit/${x._id}`} className="btn btn-warning">Edit</Link>
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

export default AdminCategoriesList;