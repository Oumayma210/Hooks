import React, {useState,useRef} from 'react'
import { Modal, Button } from 'react-bootstrap';


export const Add = ({addMovie}) => {
    const titleRef=useRef();
    const rateRef=useRef();
    const urlRef=useRef();
    const descriptionRef=useRef();

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <div>
           <>
    <Button variant="primary" onClick={handleShow}> Add
    </Button> 
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add</Modal.Title>
      </Modal.Header>
      <Modal.Body> <label for="title"> Title: </label> <input type="text"ref={titleRef}/> 
 </Modal.Body>
      <Modal.Body> <label for="title">URL Poster:</label> <input type="text" ref={urlRef}/></Modal.Body>
      <Modal.Body> <label for="title"> Rate:</label> <input type="text" ref={rateRef}/></Modal.Body>
      <Modal.Body> <label for="title"> Description:</label> <input type="text" ref={descriptionRef}/></Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={()=>addMovie({
            title:titleRef.current.value,
            description:descriptionRef.current.value,
            rating:rateRef.current.value,
            posterURL:urlRef.current.value,
        })}>
          Add
        </Button>
        
      </Modal.Footer>
    </Modal>
  </>
        </div>
    )
}
