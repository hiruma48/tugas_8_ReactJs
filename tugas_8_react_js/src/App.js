import { Component} from "react";
import {Alert, Breadcrumb, Button, Carousel, Col, Container, Dropdown, Form, ListGroup, Row } from "react-bootstrap";
import Example from "./modal";


class App extends Component{
  render(){
    return(
      <Container>
        <Row className="bg-dark">
          <Col>
          <Dropdown>
            <Dropdown.Toggle variant="primary">
              Pilih Bahasa
            </Dropdown.Toggle>
          </Dropdown>
          </Col>
          <Col></Col>
          <Col></Col>
          <Col>
          <div class="media">
          
          <img
          width={64}
          height={64}
          className="mx-auto d-block"
          src="https://png.pngtree.com/svg/20161113/ef1b24279e.png"
          alt="general placeholder"
          /> 
          <h5 class="mt-0" className="text-white text-center">Alan Saputra</h5>
        </div>
          </Col>
        </Row>
        <Row>
        <Col></Col>
        <Col></Col>
        <Col>
      <Alert variant="secondary">
        <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/">Berita</Breadcrumb.Item>
        <Breadcrumb.Item href="/">Bola</Breadcrumb.Item>
        </Breadcrumb>
        </Alert>
        
        </Col>
      </Row>
      <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src="https://images.performgroup.com/di/library/GOAL/30/f0/neymar-psg-paris-saint-germain-2018-19_gmakk5891n9c19udcwofmrsgc.jpg?t=-1258742791&quality=60&w=1600" alt="naymar"/>
            <Carousel.Caption>
            <h3>neymar </h3>
            <p>neymar adalah pemain terbaik dunia</p>
          </Carousel.Caption>
          </Carousel.Item>
          
          <Carousel.Item>
            <img className="d-block w-100" src="https://images.performgroup.com/di/library/GOAL/f3/33/england-celebrate-vs-montenegro_e97kv5anpqlq1gr9nc2qaz4ko.jpg?t=-1232521935&quality=60&w=1600" alt="inggris"/>
            <Carousel.Caption>
            <h3>Inggris</h3>
            <p>Inggris mau menjadi team terbaik dunia</p>
          </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="https://images.performgroup.com/di/library/GOAL/63/7f/sani-rizki-fauzi-indonesia-u-22_4yztc4nehkt61fa7omuyagf71.jpg?t=351764441&quality=60&w=1600

" alt="sani"/>
            <Carousel.Caption>
            <h3>Sani Rizki fauzi</h3>
            <p>Sani Rizki fauzi Tegaskan Mental Pemain Timnas Indonesia U-23 Tetap bagus</p>
          </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <br/>
        <Row>
        <Col>
        <ListGroup>
          <ListGroup.Item active>Liga 1 indonesia</ListGroup.Item>
          <ListGroup.Item >Liga Primer inggris</ListGroup.Item>
          <ListGroup.Item >divisi Primera</ListGroup.Item>
          <ListGroup.Item >Serie A</ListGroup.Item>
          <ListGroup.Item>Ligue 1</ListGroup.Item>
          <ListGroup.Item>Bundes Liga</ListGroup.Item>
        </ListGroup>
        </Col>
        <Col>
        <Alert variant="secondary">
        <div class="jumbotron">
            <h5 class="display-5">DIVISI PRIMERA</h5>
            <p class="lead">Main Untuk Catalunya, gerard pique Minta Dihormati</p>
            <Button variant="primary">Read More</Button>
        </div>
        </Alert>
        </Col>
        <Col>
        <Form>
        <img
          width={64}
          height={64}
          className="mx-auto d-block"
          src="https://banner2.kisspng.com/20180420/kuq/kisspng-computer-icons-user-clip-art-my-vector-5ad9a348cd2ce1.8035052415242125528404.jpg"
          alt="general placeholder"
          /> 
          <h3 className="text-center">Silakan Login</h3>
          <Form.Group>
            <Form.Control type="email" placeholder="masukan email"/>
          </Form.Group>
          <br/>
          <Form.Group>
            <Form.Control type="text" placeholder="masukan password"/>
          </Form.Group>
          <br/>
          <Form.Group>
            <Form.Check type="checkbox" label="Term & Condition"/>
          </Form.Group>
     <Example/>
        </Form>
        </Col>
        </Row>
      </Container>
    )
  }
}

export default App;
