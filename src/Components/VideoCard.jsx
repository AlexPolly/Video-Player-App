import React from 'react'
import { useState } from 'react';
import { Card, Modal } from 'react-bootstrap';
import { addHistory, deleteAVideo } from '../services/allAPI';



function VideoCard({displayData, setDeleteVideosStatus, insideCategory}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true)
    // get caption and link
    const {caption,embedlink} = displayData
    // generate timestap
    let today = new Date()
    const timestamp =new Intl.DateTimeFormat("en-US",{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(today)
    let reqBody = {
      caption,embedlink,timestamp
    }
    // make api call
    await addHistory(reqBody)
  };

  // delete a video
  const removeVideo = async (id)=>{
    // make api call
    const response = await deleteAVideo(id)
    setDeleteVideosStatus(true)
  } 

  const dragStarted = (e,id)=>{
    console.log("Drag started");
    e.dataTransfer.setData("cardId",id)
  }
  return (
    <>
      {
        displayData &&
       <Card className='mb-3' draggable onDragStart={(e)=>dragStarted(e,displayData?.id)}>
      <Card.Img onClick={handleShow} style={{height:'180px',padding:'10px'}} className='w-100' variant="top" src={displayData?.url} />
      <Card.Body>
        <Card.Title className='d-flex justify-content-between align-items-center'>
          <h6>{displayData?.caption}</h6>
          {insideCategory?"":<button onClick={()=>removeVideo(displayData?.id)} className='btn'><i className="fa-solid text-danger fa-trash"></i></button>}
        </Card.Title>
      </Card.Body>
    </Card>}


    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displayData?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width={"100%"} height={"400px"} src={`${displayData?.embedlink}?autoplay=1`} title={displayData?.caption}   allowFullScreen></iframe>
        </Modal.Body>
      </Modal>

    </>
  )
}

export default VideoCard