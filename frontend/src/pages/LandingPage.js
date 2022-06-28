import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { services, testimonials } from '../Data';
import Carousel from '../components/CarouselBox';
import CarouselBox from '../components/CarouselBox';

const LandingPage = () => {
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center landing">
        <Card
          style={{ width: '30rem', background: '#b25d7fdf' }}
          className="text-center"
        >
          <Card.Body>
            <Card.Title className="text-white fw-bold mb-3">
              Freelance Made Simple
            </Card.Title>
            <Card.Text className="text-white mb-3">
              Looking for a perfect website for freelancing? Don't look further!
              You have arrived. We help our clients in conducting academic
              researches, writing proposals, essays, and professional reports.
              Slide into our website for more information
            </Card.Text>
            <Button href="/home" variant="primary">
              Get Started
            </Button>
          </Card.Body>
        </Card>
      </div>
      <div className="container-fluid mt-5">
        <CarouselBox className="carouselBox" />
      </div>
      <div className="m-5 ">
        <h3 className="mb-3 text-center">Services</h3>
        <Row className="mb-3">
          {services.map((service) => (
            <Col sm={6} md={4} lg={3} key={service._id}>
              <Card
                style={{
                  width: '18rem',
                  height: '15rem',
                  background: '#f88d21',
                }}
              >
                <Card.Body>
                  <span className="text-white">{service.icon}</span>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <div className=" bg-light p-4">
        <Row>
          <Col className="d-flex flex-column justify-content-center align-items-center ">
            <h3>Are you a Student?</h3>
            <p>
              Introduction Writing proposals for funding is one of the most
              crucial aspects of any NGO. Proposals are important for any
              organization, as they decide the success or failure of an
              organization. No matter how big or small
            </p>
            <Button href="#">Continue</Button>
          </Col>
          <Col>
            <img
              style={{ width: '100%', opacity: '0.3' }}
              src="./images/students.jpg"
              alt="students"
            />
          </Col>
        </Row>
      </div>
      <div className="container-fluid d-flex align-items-center justify-content-center mb-5 subscribe">
        <p className="text-bold">Subscribe here</p>
        <Form.Group className="mx-2">
          <Form.Control type="text" placeholder="Enter your email" required />
        </Form.Group>
        <Button type="submit" variant="primary" onClick={'/subscribe'}>
          Subscribe
        </Button>
      </div>
      <div className=" bg-light p-4">
        <Row>
          <Col>
            <img
              style={{ width: '100%', opacity: '' }}
              src="./images/class.jpg"
              alt="class"
            />
          </Col>
          <Col className="d-flex flex-column justify-content-center align-items-center ">
            <h3>Experienced professionals?</h3>
            <p>
              Our team is comprised of professionals who understand the clients'
              need.
            </p>
            <Button href="#">Learn More</Button>
          </Col>
        </Row>
      </div>
      <div className="container-fluid">
        <h3 className="text-center">Testimonials</h3>
        <Row className="mb-3">
          {testimonials.map((test) => (
            <Col sm={6} md={4} lg={3} key={test._id}>
              <Card
                style={{
                  width: '18rem',
                  height: '18rem',
                  background: '#cf3fe1',
                }}
              >
                <Card.Body>
                  <Card.Text>{test.comment}</Card.Text>
                  <Card.Title>{test.name}</Card.Title>
                  <span>
                    {test.occupation}, {test.organization}
                  </span>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default LandingPage;
