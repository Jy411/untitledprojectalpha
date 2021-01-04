import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {Col, Container, Row} from 'react-bootstrap';

import './About.css';

export const About = () => {

  return (
      <div className="about">

        <Jumbotron fluid>
          <Container>
            <h1 style={{fontFamily: 'Baskerville', fontWeight: '500', fontSize: '4em'}}>Would you like some tea?</h1>
            <p style={{fontFamily: 'Futura'}}>
              Floral, bitter, sweet, or sour! We have a taste for everyone!
            </p>
          </Container>
        </Jumbotron>

        <Container>
          <Row>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src='https://live.staticflickr.com/1975/45174310791_0b51734667.jpg' />
                <Card.Body>
                  <Card.Title>Calming Chamomile</Card.Title>
                  <Card.Text>
                    The benefits of drinking Chamomile Tea are plentiful. From curing stomach pains, to easing anxiety.
                    You can always rely on Chamomile.
                  </Card.Text>
                  <Button variant="outline-warning">Learn more</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://live.staticflickr.com/7361/16545604645_467e67bd41.jpg" />
                <Card.Body>
                  <Card.Title>Lovely Lavender</Card.Title>
                  <Card.Text>
                    Don't know much about lavender? Me neither.
                  </Card.Text>
                  <Button variant="outline-info">Buy me</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://live.staticflickr.com/5590/14430445994_e3212dfd15.jpg" />
                <Card.Body>
                  <Card.Title>Cannabis Tea</Card.Title>
                  <Card.Text>
                    Get high without smoking! Save your lungs. Save your throat!
                  </Card.Text>
                  <Button variant="outline-success">Blaze it</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

      </div>
  )};
