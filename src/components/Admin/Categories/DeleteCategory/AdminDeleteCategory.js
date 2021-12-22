import {Modal, Button} from 'react-bootstrap';

import * as categoryService from '../../../../services/categoryService';
const AdminDeleteCategory = (props) => {
   
    if(!props.showModal){
        return null;
    }

    return (
        <Modal onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete {props.categoryTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete {props.categoryTitle}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={props.onDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    )
}

export default AdminDeleteCategory;