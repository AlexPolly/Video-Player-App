import React, { useEffect, useState } from 'react'
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import VideoCard from './VideoCard'
import { getAllVideos, uploadVideo } from '../services/allAPI';


function View(uploadVideoServerResponse) {

  const [allVideos,setAllVideos] = useState([])
  const [ deleteVideosStatus, setDeleteVideosStatus ] = useState(false)
  const getAllUploadedVideos = async()=>{
    // make api call
    const {data} =await getAllVideos()
    setAllVideos(data)
  }
  
  useEffect(()=>{
    setDeleteVideosStatus(false)
    getAllUploadedVideos()
  },[uploadVideoServerResponse, deleteVideosStatus])
  // console.log(allVideos);

  return (
    <Row>
     { 
      allVideos?.length>0?
      allVideos?.map(video=>(
        <Col sm={12} md={6} lg={4} xl={3} >
        <VideoCard displayData={video}  setDeleteVideosStatus={setDeleteVideosStatus}/>
       </Col>
      ))
      :<p className='fw-bolder mt-3 fs-5 text-warning'>Nothing to Display!!!</p>
      }
    </Row>
  )
}

export default View