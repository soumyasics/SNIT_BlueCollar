import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaToolbox, FaCar, FaHammer, FaBuilding, FaPaintRoller, FaTruck, FaUtensils, FaUserPlus, FaSearch, FaPaperPlane } from 'react-icons/fa';
import { FaBoltLightning } from 'react-icons/fa6';
import './Home.css';
import mario from '../../../Assets/Ellipse 2.png';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Hero from '../Hero/Hero';

const iconStyle = { color: 'black' };

const categories = [
  { name: 'Electrician', icon: <FaBoltLightning style={iconStyle} /> },
  { name: 'Plumber', icon: <FaToolbox style={iconStyle} /> },
  { name: 'Mechanic', icon: <FaCar style={iconStyle} /> },
  { name: 'Carpenter', icon: <FaHammer style={iconStyle} /> },
  { name: 'Construction', icon: <FaBuilding style={iconStyle} /> },
  { name: 'Painting', icon: <FaPaintRoller style={iconStyle} /> },
  { name: 'Driver', icon: <FaTruck style={iconStyle} /> },
  { name: 'Food Processing', icon: <FaUtensils style={iconStyle} /> }
];

function Home() {
  return (
    <>
      <Navbar />
      <div className='container-fluid p-0'>
        <Hero />
        <div className='m-5 text-center'>
          <p className='border-info border-3 border-bottom border-dotted home-subheading'>Popular Category</p>
          <p className='home-para'>Many desktop publishing packages and web page editors</p>
        </div>
        <Container className="mx-auto text-center">
          <Row>
            {categories.slice(0, 4).map((category, index) => (
              <Col key={index} xs={12} md={6} lg={3} className="mb-4">
                <Card className="bg-secondary-subtle text-white">
                  <Card.Body className="d-flex flex-column align-items-center">
                    <div className="fs-1 mb-3">{category.icon}</div>
                    <Button variant="light" className='px-5'>{category.name}</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <Row>
            {categories.slice(4).map((category, index) => (
              <Col key={index} xs={12} md={6} lg={3} className="mb-4">
                <Card className="bg-secondary-subtle text-white">
                  <Card.Body className="d-flex flex-column align-items-center">
                    <div className="fs-1 mb-3">{category.icon}</div>
                    <Button variant="light" className='px-5'>{category.name}</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
        <Container className='home-bg mb-0'>
          <div className='m-5 mb-0 text-center'>
            <Row className='m-5 text-center'>
              <p className='home-subheading'>How It Works?</p>
            </Row>
            <Row className='m-5'>
              <Col>
                <FaUserPlus className="fs-1 icon-color" />
                <h3 className='text-secondary h3-nowrap'>Create an Account</h3>
                <p>It is long established fact reader distracted readable content</p>
              </Col>
              <Col className='m-auto'>
                <i className="bi bi-arrow-right fs-1 w-100"></i>
              </Col>
              <Col>
                <FaSearch className="fs-1 icon-color" />
                <h3 className='text-secondary h3-nowrap'>Find Your Job</h3>
                <p>It is long established fact reader distracted readable content</p>
              </Col>
              <Col className='m-auto'>
                <i className="bi bi-arrow-right fs-1 w-100"></i>
              </Col>
              <Col>
                <FaPaperPlane className="fs-1 icon-color" />
                <h3 className='text-secondary h3-nowrap'>Apply</h3>
                <p>It is long established fact reader distracted readable content</p>
              </Col>
            </Row>
          </div>
        </Container>
        <Container>
          <Row className='mb-5 text-center'>
            <h2 className='home-subheading'>Recent Job Openings</h2>
            <p className='home-para icon-color'>Welcome to the world of jobs</p>
          </Row>
        </Container>
        <div className='container-fluid m-auto'>
          <Row className="m-auto">
            {[...Array(6)].map((_, index) => (
              <Col key={index} className="m-3 border rounded border-secondary-subtle p-3">
                <Row>
                  <Col xs={6} className="d-flex align-items-center justify-content-center">
                    <img src={mario} alt="mario" className="img-fluid" />
                  </Col>
                  <Col xs={6} className="d-flex align-items-center justify-content-center fw-bolder">
                    15kDay
                  </Col>
                </Row>
                <Row>
                  <Col xs={6} className="d-flex flex-column align-items-center justify-content-center">
                    <p className="text-center">
                      <span className='fs-6 fw-bolder'>Location | Country</span><br />
                      <span className='fs-4 fw-light'>Job Name:</span><br />
                      <span className='fs-4 fw-light'>Job type:</span><br />
                    </p>
                  </Col>
                  <Col xs={6}></Col>
                </Row>
                <Row>
                  <Col className="text-center">
                    <Button variant="primary" className="w-100 py-3">Apply Now</Button>
                  </Col>
                </Row>
              </Col>
            ))}
          </Row>
        </div>
        <div className='m-5 text-center'>
          <p className='border-info border-3 border-bottom border-dotted home-subheading'>Best Candidate</p>
          <p className='home-para'>Many desktop publishing packages and web page editors</p>
        </div>
        <div className='container-fluid m-auto'>
          <Row className="m-auto">
            {[...Array(6)].map((_, index) => (
              <Col key={index} className="m-3 border rounded border-secondary-subtle p-3">
                <Row>
                  <Col xs={6} className="d-flex align-items-center justify-content-center">
                    <img src={mario} alt="mario" className="img-fluid" />
                  </Col>
                  <Col xs={6} className="d-flex align-items-center justify-content-center fw-bolder">
                    15kDay
                  </Col>
                </Row>
                <Row>
                  <Col xs={6} className="d-flex flex-column align-items-center justify-content-center">
                    <p className="text-center">
                      <span className='fs-6 fw-bolder'>Location | Country</span><br />
                      <span className='fs-4 fw-light'>Job Name:</span><br />
                      <span className='fs-4 fw-light'>Job type:</span><br />
                    </p>
                  </Col>
                  <Col xs={6}></Col>
                </Row>
                <Row>
                  <Col className="text-center">
                    <Button variant="primary" className="w-100 py-3">Request Now</Button>
                  </Col>
                </Row>
              </Col>
            ))}
          </Row>
          <Row className="m-auto">
            <Col className='m-auto text-center'>
              <Button variant="primary" className='rounded-pill w-25 m-5'>Know More</Button>
            </Col>
          </Row>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
