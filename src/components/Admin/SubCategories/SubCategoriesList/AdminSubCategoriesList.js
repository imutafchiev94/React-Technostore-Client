import {Card, Table, Button} from 'react-bootstrap';
import React, {useState, useEffect} from 'react';
import * as subCategoryService from '../../../../services/subCategoryService';
import {Link} from 'react-router-dom';
import Spinner  from '../../../Spinner/Spinner';
import styles from './AdminSubCategoriesList.module.css'
const AdminSubCategoriesList = () => {
    const [subCategories, setSubCategories] = useState([]);
    const [isDeleted, setIsDeleted] = useState(false);

    useEffect(() => {
        subCategoryService.getAll()
        .then(result => {
            setSubCategories(result);
        })
        setIsDeleted(false);
    },[isDeleted])


    const onclickDeleteButton = (e, subCategory) => {
        e.preventDefault();
        subCategoryService.deleteSubCategory(subCategory._id)
        .then(result => {
            setIsDeleted(true)
        })
    }



    if(subCategories.length < 1) {
        return (<Spinner />)
    }
    return (
        <>
        <Card >
            <Card.Header className={styles.cardHeader}>

                <h1 className={styles.pageHeader}>
                    SubCategories
                </h1>

                <Link to="create" className="btn btn-success">Create SubCategory</Link>
            </Card.Header>
            <Card.Body>
                <Table striped bordered hover className={styles.table}>
                    <thead>
                        <tr className={styles.tableHeader}>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Category</th>
                            <th>Actions</th>
                        </tr>
                        {
                            subCategories.map(x => 
                            <tr key={x._id} className={styles.actions}>
                                <td>{x.title}</td>
                                <td>{x.description}</td>
                                <td>{x.category.title}</td>
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
export default AdminSubCategoriesList;