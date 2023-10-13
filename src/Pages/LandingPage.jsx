import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


function LandingPage() {

  const navigateByUrl = useNavigate()

  const navigate = ()=>{
    navigateByUrl('/home')
  }
  return (
    <>
      <Row className='mt-5 mb-5 align-items-center justify-content-between'>
        <Col ></Col>
        <Col lg={4}>
          <h3 className='mb-3'>Welcome to <span className='text-warning'>Media Player</span> </h3>
          <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, rerum vel minima natus, optio porro nulla impedit tenetur perspiciatis repellat, cumque saepe ullam officiis? Dolorem quibusdam enim reprehenderit atque sunt.</p>
          <button onClick={navigate} className='btn btn-info mt-5 fw-bolder'>Get Started</button>
        </Col>
        <Col></Col>
        <Col className='ps-5' lg={6}>
          <img className='img-fluid ms-1 ps-3 w-75' src="https://i.pinimg.com/originals/dc/c9/ce/dcc9cea8525b59b91d1a6ed0e27fff59.gif" alt="landing" />
        </Col>
      </Row>

      <div className='container mt-5 mb-5 d-flex align-items-center justify-content-center flex-column'>
        <h3 className='fs-1 fw-bolder'>Features</h3>
        <div className='cards mt-5  d-flex align-items-center justify-content-between w-100'>
          <Card className='p-3' style={{ width: '22rem',backgroundColor:'lightpink' }}>
            <Card.Img style={{ height: '300px', widows: '300px' }} variant="top" src="https://i.pinimg.com/originals/69/e5/ff/69e5ffe76053b996e9759cf2126a84db.gif" />
            <Card.Body>
              <Card.Title>Managing Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className='p-3 ' style={{ width: '22rem',backgroundColor:'lightyellow' }}>
            <Card.Img style={{ height: '300px', widows: '300px'}} variant="top" src="https://i.pinimg.com/originals/ec/36/db/ec36db6a368fcc32d99ccfa383a4f52a.gif" />
            <Card.Body>
              <Card.Title>Categories Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className='p-3' style={{ width: '22rem',backgroundColor:'lightblue' }}>
            <Card.Img style={{ height: '300px', widows: '300px' }} variant="top" src="https://cutewallpaper.org/25/animated-wallpaper-gif-music/equalizer-icon-text-logo-design-gif-animated-images-aesthetic-gif.gif" />
            <Card.Body>
              <Card.Title>Watch History</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className='container mt-5 mb-5 d-flex align-items-center justify-content-between w-100 border p-5 border-secondary rounded '>
        <div style={{width:'500px'}} className='content'>
          <h3 className='text-warning mb-5'>Simple, Fast and Powerful</h3>
          <h6><span className='fs-5 fw-bolder'>Play Everything</span> : Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo iure tempore vero suscipit quis nihil nobis nostrum atque distinctio quas reiciendis unde corrupti, temporibus impedit culpa maiores deserunt similique expedita.</h6>
          <h6 className='mt-4'><span className='fs-5 fw-bolder'>Categories Videos</span> : Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo iure tempore vero suscipit quis nihil nobis nostrum atque distinctio quas reiciendis unde corrupti, temporibus impedit culpa maiores deserunt similique expedita.</h6>
          <h6 className='mt-4'><span className='fs-5 fw-bolder'>Managing History</span> : Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo iure tempore vero suscipit quis nihil nobis nostrum atque distinctio quas reiciendis unde corrupti, temporibus impedit culpa maiores deserunt similique expedita.</h6>
        
        </div>
        <div className='video ms-5'>
        <iframe width="650" height="387" src="https://www.youtube.com/embed/2Vv-BfVoq4g" title="Ed Sheeran - Perfect (Official Music Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
    </>

  )
}

export default LandingPage