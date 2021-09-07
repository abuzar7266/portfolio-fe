import React, { Component } from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Card,Dropdown,Form,DropdownButton } from 'react-bootstrap';
import imgs from '../../images/myPic.jpg';
import { Image } from 'react-bootstrap'; 
import NavBar from '../../components/jsx/NavBar';
class Contact extends Component
{
  render()
  {
    return (<>
    <NavBar/>
       <Container fluid>
            <Row>
              <br /><br /><br />
            </Row>
            <Row>
              <Col xs={0}
                   sm={0}
                   md={0}
                   lg={1}
                   className="align-self-center">
              </Col>
              <Col xs={12}
                   sm={12}
                   md={0}
                   lg={6}
                   className="align-self-center">
                          <Card style={{boxShadow:"5px 5px 10px black",marginBottom:"20px",maxWidth:"600px"}}>
                       <Card.Header style={{backgroundColor:"#161C27",height:"40px",color:"white"}}>
                       Contact us
                       </Card.Header>
                          <Card.Body style={{backgroundColor:"#1C2331",color:"white"}}>
                              <Card.Text>
                              <Image height="180px" width="165px" style={{borderRadius:"50%",paddingTop:"20px",boxShadow:"10px 10px 10px black"}} src={imgs} fluid/>
                              <p style={{fontSize:"15px",paddingTop:"10px"}}>@Abuzar</p>
                              <p style={{fontSize:"11px",paddingTop:"10px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget auctor eros, at dapibus orci. Aliquam ornare odio ac magna porttitor, eu tincidunt mi accumsan. Praesent fringilla massa pellentesque elit fermentum tincidunt. Aenean non justo et neque vulputate lobortis quis vel nunc. Nullam a blandit sapien, sed rhoncus odio. Vestibulum vel ex dictum, dictum nisi at, iaculis sapien. In lacinia fermentum imperdiet.
Phasellus quis magna tellus. Quisque vulputate vel neque quis consequat. Nulla sollicitudin mauris in est feugiat porta. In nec nisi semper, bibendum sem quis, ornare dolor. Nulla a erat eros. Ut at orci varius, pretium mauris ac, ultricies dui</p>
                              </Card.Text>
                          </Card.Body>
                        </Card>
              </Col>
              <Col xs={12}
                   sm={12}
                   md={12}
                   lg={4}
                   >
                     <Card style={{boxShadow:"5px 5px 10px black",maxWidth:"700px"}}>
                       <Card.Header style={{backgroundColor:"#161C27",height:"45px",color:"white"}}>
                       <div className="row">
                       <div class="col-12">
                                Send Message
                       </div>
                       </div>
                       </Card.Header>
                       <Card.Body style={{backgroundColor:"#1C2331",color:"white"}}>
                           <Card.Text>
                           <form>
                        <div class="form-group row" style={{marginBottom:"10px"}}>
                            <div class="col-12">
                                <Form.Control type="text" placeholder="Subject" />
                            </div>
                        </div>
                        <div class="form-group row" style={{marginBottom:"10px"}}>
                            <div class="col-6">
                                <Form.Control type="text" placeholder="First Name" />
                            </div>
                            <div class="col-6">
                                <Form.Control type="text" placeholder="Last Name" />
                            </div>
                        </div>
                        <div class="form-group row" style={{marginBottom:"10px"}}>
                            <div class="col-7">
                                <label class="sr-only" for="exampleInputEmail3">Email address</label>
                                <Form.Control type="email" placeholder="Email Address" />
                            </div>
                            <div class="col-5">
                                <Form.Control type="number" placeholder="Mobile No." />
                            </div>
                        </div>
                        <div class="form-group row" style={{marginBottom:"10px"}}>
                            <div class="col-8">
                            <label class="sr-only" for="attachImages">Attachments</label>
                                <input
                                    type="file"
                                    id="attachImages"
                                    aria-describedby="attachImagesAddon01"
                                    multiple/>
                            </div>
                        </div>
                        <div class="form-group row" style={{marginBottom:"10px"}}>
                            <div class="col-12">
                                    <textarea
                                    className="form-control"
                                    id="exampleFormControlTextarea1"
                                    rows="5"
                                    placeholder="Write something..."
                                    />
                            </div>
                        </div>
                        <div class="form-row">
                            <button type="submit" class="btn btn-primary btn-sm ml-1" style={{margin:"10px",boxShadow:"1px 1px 10px black"}}> <i className="fa fa-send"></i> Send  </button>
                        </div>
                    </form>
                          </Card.Text>
                       </Card.Body>
                   </Card>
              </Col>
            </Row>
       </Container>
       <Container fluid>
         <Row style={{color:"black"}}>
            <Col>
              <br />
              <br />
              <hr />
              <br />
              <br />
            </Col>
         </Row>
       </Container>
    </>);
  }
};

export default Contact;