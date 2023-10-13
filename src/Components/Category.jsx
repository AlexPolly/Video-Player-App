import React,{useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { getAllCategory, saveCategory, deleteCategory, getAVideo, updateCategory } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import VideoCard from './VideoCard';
import { Row, Col } from 'react-bootstrap';

function Category() {
  const [allCategory, setAllCategory] = useState([])
  const [categoryName,setCategoryName] = useState("")
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleAddCategory = async  ()=>{
    if(categoryName){
      const body = {
        categoryName,allVideos:[]
      }
      // make api call
      const response = await saveCategory (body)
      if(response.status>=200 && response.status<300){
        // hide modal
        handleClose()
        // reset state
        setCategoryName("")
        // call handlegetcategory
        handleGetCategory()
      }else{
        toast.warning("Uploading Error.... Perform the OPeration after sometime...")
      }
      
    }else{
      toast.info("Please provide category name...")
    }
  }

  const handleGetCategory = async ()=>{
    // make api call
    const {data} = await getAllCategory()
    setAllCategory(data);
  }

  const handleDeleteCategory = async (id) =>{
    // make api call
    await deleteCategory(id)
    // get all category
    handleGetCategory( )
  }

  useEffect(()=>{
    handleGetCategory()
  },[])

  const dragOver = (e)=>{
    console.log("Dragging Over the category");
    e.preventDefault()
  }

  const videoDropped = async (e,categoryId)=>{
    // console.log("Inside category id : "+categoryId);
    const videoCardId = e.dataTransfer.getData("cardId")
    // console.log("Video card id :"+videoCardId);
    // get details od video to be dropped
    const {data} = await getAVideo(videoCardId)
    // console.log(data);
    // get details category
    const selectedCategory = allCategory.find(item=>item.id===categoryId)
    selectedCategory.allVideos.push(data)
    // console.log(selectedCategory);
    await updateCategory(categoryId,selectedCategory)
    handleGetCategory()
  }

console.log(allCategory);
  return (
    <>
     <div className='d-grid'>
      <button className='btn btn-info' onClick={handleShow} >Add New Category </button>
       
     </div>
     {
      allCategory.length>0?allCategory?.map(item=>(
        <div className='border mt-3 mb-3 p-3 rounded' droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDropped(e,item?.id)}>
          <div className='d-flex justify-content-between align-items'>
            <h6>{item?.categoryName}</h6>
            <button onClick={()=>handleDeleteCategory(item?.id)}  className='btn'><i class="fa-solid fa-trash text-danger"></i></button>
          </div>
         {
          item?.allVideos&&
          <Row>
            {
              item?.allVideos.map(card=>(
                <Col sm={6}>
                 <VideoCard displayData={card} insideCategory={true} />
                </Col>
              ))
            }
          </Row>
         }
        </div>
      )):<p className='fw-bolder mt-3 fs-5 text-danger'> No Categpries are added</p>
     }

     <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className='border border-info rounded p-3 '>
          <Form.Label>Enter Category Name</Form.Label >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter Category Name...." onChange={(e)=>setCategoryName(e.target.value)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleAddCategory} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer 
       position='top-center'
       theme='colored'
       autoClose={2000}
      />
    </>
  )
}

export default Category