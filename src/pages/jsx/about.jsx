import React, { Component } from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import imgs from '../../images/myPic.jpg';
import {Card} from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import '../css/about.css';
class About extends Component
{   
    render(){
    return (<>
    <div style={{backgroundColor:"darkgrey"}}>
    <Container style={{backgroundColor:"darkgrey"}} fluid>
            <Row>
                <hr style={{boxShadow:"10px 10px 20px black"}}/>
            </Row>
            <Row>
                <br />
                <br />
                <br />
            </Row>
        </Container>
        <Container fluid style={{marginLeft:"20px"}}>
            <Row>
                <Col xs={0}
                    sm={0}
                    md={2}
                    lg={2}>

                </Col>
                <Col 
                    xs={12}
                    sm={12}
                    md={2}
                    lg={2}
                    style={{color:"white",overflow:"hidden",textAlign:"center" }}
                    className="align-self-center"
                >
                    <Card style={{boxShadow:"5px 5px 10px black",marginBottom:"20px",maxWidth:"300px"}}>
                       <Card.Header style={{backgroundColor:"#161C27",height:"40px",color:"white"}}>
                       User Profile
                       </Card.Header>
                       <Card.Body style={{backgroundColor:"#1C2331",color:"white"}}>
                           <Card.Text>
                           <Image height="110px" width="110px" style={{borderRadius:"50%",paddingTop:"20px"}} src={imgs} fluid/>
                           <p style={{fontSize:"15px",paddingTop:"10px"}}>@Abuzar</p>
                          </Card.Text>
                       </Card.Body>
                   </Card>
                </Col>
                <Col 
                    xs={10}
                    sm={10}
                    md={4}
                    lg={3}
                    style={{textAlign:'left',overflow:"hidden"}}
                    className="align-self-center"
                >
                <Card style={{boxShadow:"5px 5px 10px black",marginBottom:"20px"}}>
                       <Card.Header style={{backgroundColor:"#161C27",height:"40px",color:"white"}}>
                           Current Job Status
                       </Card.Header>
                       <Card.Body style={{backgroundColor:"#1C2331",color:"white"}}>
                           <Card.Text>
                           <p style={{fontSize:"12px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget auctor eros, at dapibus orci. Aliquam ornare odio ac magna porttitor, eu tincidunt mi accumsan. Praesent fringilla massa pellentesque elit fermentum tincidunt. Aenean non justo et neque vulputate lobortis quis vel nunc. Nullam a blandit sapien, sed rhoncus odio. Vestibulum vel ex dictum, dictum nisi at, iaculis sapien. In lacinia fermentum imperdiet.
Phasellus quis magna tellus. Quisque vulputate vel neque quis consequat. Nulla sollicitudin mauris in est feugiat porta. In nec nisi semper, bibendum sem quis, ornare dolor. Nulla a erat eros. Ut at orci varius, pretium mauris ac, ultricies dui</p>
                          </Card.Text>
                       </Card.Body>
                   </Card>
                </Col>
                <Col 
                    xs={10}
                    sm={10}
                    md={4}
                    lg={3}
                    style={{textAlign:'left',overflow:"hidden"}}
                    className="align-self-center"
                >
                <Card style={{boxShadow:"5px 5px 10px black",marginBottom:"20px"}}>
                       <Card.Header style={{backgroundColor:"#161C27",height:"40px",color:"white"}}>
                           Current Job Status
                       </Card.Header>
                       <Card.Body style={{backgroundColor:"#1C2331",color:"white"}}>
                           <Card.Text>
                           <p style={{fontSize:"12px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget auctor eros, at dapibus orci. Aliquam ornare odio ac magna porttitor, eu tincidunt mi accumsan. Praesent fringilla massa pellentesque elit fermentum tincidunt. Aenean non justo et neque vulputate lobortis quis vel nunc. Nullam a blandit sapien, sed rhoncus odio. Vestibulum vel ex dictum, dictum nisi at, iaculis sapien. In lacinia fermentum imperdiet.
Phasellus quis magna tellus. Quisque vulputate vel neque quis consequat. Nulla sollicitudin mauris in est feugiat porta. In nec nisi semper, bibendum sem quis, ornare dolor. Nulla a erat eros. Ut at orci varius, pretium mauris ac, ultricies dui</p>
                          </Card.Text>
                       </Card.Body>
                </Card>
                </Col>
            </Row>
            <Row>
                <Col xs={0}
                    sm={0}
                    md={1}
                    lg={2}>

                </Col>
                <Col 
                    xs={9}
                    sm={9}
                    md={3}
                    lg={2}
                    style={{textAlign:"left",overflow:"hidden"}}
                    className="align-self-center"
                >
                <Card style={{boxShadow:"5px 5px 10px black",marginBottom:"20px"}}>
                       <Card.Header style={{backgroundColor:"#161C27",height:"40px",color:"white"}}>
                           Current Job Status
                       </Card.Header>
                       <Card.Body style={{backgroundColor:"#1C2331",color:"white"}}>
                           <Card.Text>
                           <p style={{fontSize:"12px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget auctor eros, at dapibus orci. Aliquam ornare odio ac magna porttitor, eu tincidunt mi accumsan. Praesent fringilla massa pellentesque elit fermentum tincidunt. Aenean non justo et neque vulputate lobortis quis vel nunc. Nullam a blandit sapien, sed rhoncus odio. Vestibulum vel ex dictum, dictum nisi at, iaculis sapien. In lacinia fermentum imperdiet.
Phasellus quis magna tellus. Quisque vulputate vel neque quis consequat. Nulla sollicitudin mauris in est feugiat porta. In nec nisi semper, bibendum sem quis, ornare dolor. Nulla a erat eros. Ut at orci varius, pretium mauris ac, ultricies dui</p>
                          </Card.Text>
                       </Card.Body>
                   </Card>
                </Col> 
                <Col 
                    xs={10}
                    sm={10}
                    md={4}
                    lg={3}
                    style={{textAlign:'left',overflow:"hidden"}}
                    className="align-self-center"
                >
                    <Card style={{boxShadow:"5px 5px 10px black",marginBottom:"20px"}}>
                       <Card.Header style={{backgroundColor:"#161C27",height:"40px",color:"white"}}>
                           Current Job Status
                       </Card.Header>
                       <Card.Body style={{backgroundColor:"#1C2331",color:"white"}}>
                           <Card.Text>
                           <p style={{fontSize:"12px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget auctor eros, at dapibus orci. Aliquam ornare odio ac magna porttitor, eu tincidunt mi accumsan. Praesent fringilla massa pellentesque elit fermentum tincidunt. Aenean non justo et neque vulputate lobortis quis vel nunc. Nullam a blandit sapien, sed rhoncus odio. Vestibulum vel ex dictum, dictum nisi at, iaculis sapien. In lacinia fermentum imperdiet.
Phasellus quis magna tellus. Quisque vulputate vel neque quis consequat. Nulla sollicitudin mauris in est feugiat porta. In nec nisi semper, bibendum sem quis, ornare dolor. Nulla a erat eros. Ut at orci varius, pretium mauris ac, ultricies dui</p>
                          </Card.Text>
                       </Card.Body>
                   </Card>
                </Col> 
                <Col 
                    xs={10}
                    sm={10}
                    md={4}
                    lg={3}
                    style={{textAlign:'left',overflow:"hidden"}}
                    className="align-self-center"
                >
                <Card style={{boxShadow:"5px 5px 10px black",marginBottom:"20px"}}>
                       <Card.Header style={{backgroundColor:"#161C27",height:"40px",color:"white"}}>
                           Current Job Status
                       </Card.Header>
                       <Card.Body style={{backgroundColor:"#1C2331",color:"white"}}>
                           <Card.Text>
                           <p style={{fontSize:"12px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget auctor eros, at dapibus orci. Aliquam ornare odio ac magna porttitor, eu tincidunt mi accumsan. Praesent fringilla massa pellentesque elit fermentum tincidunt. Aenean non justo et neque vulputate lobortis quis vel nunc. Nullam a blandit sapien, sed rhoncus odio. Vestibulum vel ex dictum, dictum nisi at, iaculis sapien. In lacinia fermentum imperdiet.
Phasellus quis magna tellus. Quisque vulputate vel neque quis consequat. Nulla sollicitudin mauris in est feugiat porta. In nec nisi semper, bibendum sem quis, ornare dolor. Nulla a erat eros. Ut at orci varius, pretium mauris ac, ultricies dui</p>
                          </Card.Text>
                       </Card.Body>
                   </Card>
                </Col>
            </Row>
            <Row>
                <Col xs={0}
                    sm={0}
                    md={2}
                    lg={2}>

                </Col>
                <Col 
                    xs={0}
                    sm={0}
                    md={2}
                    lg={2}
                >
                </Col>
                <Col 
                    xs={10}
                    sm={10}
                    md={4}
                    lg={3}
                    style={{textAlign:'left',overflow:"hidden"}}
                    className="align-self-center"
                >
                <Card style={{boxShadow:"5px 5px 10px black",marginBottom:"20px"}}>
                       <Card.Header style={{backgroundColor:"#161C27",height:"40px",color:"white"}}>
                           Current Job Status
                       </Card.Header>
                       <Card.Body style={{backgroundColor:"#1C2331",color:"white"}}>
                           <Card.Text>
                           <p style={{fontSize:"12px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget auctor eros, at dapibus orci. Aliquam ornare odio ac magna porttitor, eu tincidunt mi accumsan. Praesent fringilla massa pellentesque elit fermentum tincidunt. Aenean non justo et neque vulputate lobortis quis vel nunc. Nullam a blandit sapien, sed rhoncus odio. Vestibulum vel ex dictum, dictum nisi at, iaculis sapien. In lacinia fermentum imperdiet.
Phasellus quis magna tellus. Quisque vulputate vel neque quis consequat. Nulla sollicitudin mauris in est feugiat porta. In nec nisi semper, bibendum sem quis, ornare dolor. Nulla a erat eros. Ut at orci varius, pretium mauris ac, ultricies dui</p>
                          </Card.Text>
                       </Card.Body>
                   </Card>
                </Col>
                <Col 
                    xs={10}
                    sm={10}
                    md={4}
                    lg={3}
                    style={{textAlign:'left',overflow:"hidden"}}
                    className="align-self-center"
                >
                    <Card style={{boxShadow:"5px 5px 10px black",marginBottom:"20px"}}>
                       <Card.Header style={{backgroundColor:"#161C27",height:"40px",color:"white"}}>
                           Current Job Status
                       </Card.Header>
                       <Card.Body style={{backgroundColor:"#1C2331",color:"white"}}>
                           <Card.Text>
                           <p style={{fontSize:"12px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget auctor eros, at dapibus orci. Aliquam ornare odio ac magna porttitor, eu tincidunt mi accumsan. Praesent fringilla massa pellentesque elit fermentum tincidunt. Aenean non justo et neque vulputate lobortis quis vel nunc. Nullam a blandit sapien, sed rhoncus odio. Vestibulum vel ex dictum, dictum nisi at, iaculis sapien. In lacinia fermentum imperdiet.
Phasellus quis magna tellus. Quisque vulputate vel neque quis consequat. Nulla sollicitudin mauris in est feugiat porta. In nec nisi semper, bibendum sem quis, ornare dolor. Nulla a erat eros. Ut at orci varius, pretium mauris ac, ultricies dui</p>
                          </Card.Text>
                       </Card.Body>
                   </Card>
                </Col>
            </Row>
            <Row>
                <Col 
                    xs={0}
                    sm={0}
                    md={4}
                    lg={4}
                >
                </Col>
                <Col 
                    xs={10}
                    sm={10}
                    md={4}
                    lg={3}
                    style={{textAlign:'left',overflow:"hidden"}}
                    className="align-self-center"
                >
                <Card style={{boxShadow:"5px 5px 10px black",marginBottom:"20px"}}>
                       <Card.Header style={{backgroundColor:"#161C27",height:"40px",color:"white"}}>
                           Current Job Status
                       </Card.Header>
                       <Card.Body style={{backgroundColor:"#1C2331",color:"white"}}>
                           <Card.Text>
                           <p style={{fontSize:"12px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget auctor eros, at dapibus orci. Aliquam ornare odio ac magna porttitor, eu tincidunt mi accumsan. Praesent fringilla massa pellentesque elit fermentum tincidunt. Aenean non justo et neque vulputate lobortis quis vel nunc. Nullam a blandit sapien, sed rhoncus odio. Vestibulum vel ex dictum, dictum nisi at, iaculis sapien. In lacinia fermentum imperdiet.
Phasellus quis magna tellus. Quisque vulputate vel neque quis consequat. Nulla sollicitudin mauris in est feugiat porta. In nec nisi semper, bibendum sem quis, ornare dolor. Nulla a erat eros. Ut at orci varius, pretium mauris ac, ultricies dui</p>
                          </Card.Text>
                       </Card.Body>
                   </Card>
                </Col>
                <Col 
                    xs={10}
                    sm={10}
                    md={4}
                    lg={3}
                    style={{textAlign:'left',overflow:"hidden"}}
                    className="align-self-center"
                >
                    <Card style={{boxShadow:"5px 5px 10px black",marginBottom:"20px"}}>
                       <Card.Header style={{backgroundColor:"#161C27",height:"40px",color:"white"}}>
                           Current Job Status
                       </Card.Header>
                       <Card.Body style={{backgroundColor:"#1C2331",color:"white"}}>
                           <Card.Text>
                           <p style={{fontSize:"12px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget auctor eros, at dapibus orci. Aliquam ornare odio ac magna porttitor, eu tincidunt mi accumsan. Praesent fringilla massa pellentesque elit fermentum tincidunt. Aenean non justo et neque vulputate lobortis quis vel nunc. Nullam a blandit sapien, sed rhoncus odio. Vestibulum vel ex dictum, dictum nisi at, iaculis sapien. In lacinia fermentum imperdiet.
Phasellus quis magna tellus. Quisque vulputate vel neque quis consequat. Nulla sollicitudin mauris in est feugiat porta. In nec nisi semper, bibendum sem quis, ornare dolor. Nulla a erat eros. Ut at orci varius, pretium mauris ac, ultricies dui</p>
                          </Card.Text>
                       </Card.Body>
                   </Card>
                </Col>
            </Row>
        </Container>
        </div>
        <Container style={{backgroundColor:"darkgrey"}} fluid>
            <Row>
                <hr style={{boxShadow:"10px 10px 20px black"}}/>
            </Row>
            <Row>
                <br />
                <br />
                <br />
            </Row>
        </Container>
        <Container style={{backgroundColor:"darkgrey"}} fluid>
            <Row>
            <Col 
                xs={10}
                sm={10}
                md={4}
                lg={4}
                >
                  <Card style={{boxShadow:"5px 5px 10px black",marginBottom:"20px"}}>
                       <Card.Header style={{backgroundColor:"#161C27",height:"40px",color:"white"}}>
                           Future Vision
                       </Card.Header>
                       <Card.Body style={{backgroundColor:"#1C2331",color:"white"}}>
                           <Card.Text>
                           <p style={{fontSize:"12px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget auctor eros, at dapibus orci. Aliquam ornare odio ac magna porttitor, eu tincidunt mi accumsan. Praesent fringilla massa pellentesque elit fermentum tincidunt. Aenean non justo et neque vulputate lobortis quis vel nunc. Nullam a blandit sapien, sed rhoncus odio. Vestibulum vel ex dictum, dictum nisi at, iaculis sapien. In lacinia fermentum imperdiet.
Phasellus quis magna tellus. Quisque vulputate vel neque quis consequat. Nulla sollicitudin mauris in est feugiat porta. In nec nisi semper, bibendum sem quis, ornare dolor. Nulla a erat eros. Ut at orci varius, pretium mauris ac, ultricies dui</p>
                          </Card.Text>
                       </Card.Body>
                   </Card>
                </Col>
                <Col 
                xs={10}
                sm={10}
                md={4}
                lg={4}
                >
                  <Card style={{boxShadow:"5px 5px 10px black",marginBottom:"20px"}}>
                       <Card.Header style={{backgroundColor:"#161C27",height:"40px",color:"white"}}>
                           Profile Summary
                       </Card.Header>
                       <Card.Body style={{backgroundColor:"#1C2331",color:"white"}}>
                           <Card.Text>
                           <p style={{fontSize:"12px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget auctor eros, at dapibus orci. Aliquam ornare odio ac magna porttitor, eu tincidunt mi accumsan. Praesent fringilla massa pellentesque elit fermentum tincidunt. Aenean non justo et neque vulputate lobortis quis vel nunc. Nullam a blandit sapien, sed rhoncus odio. Vestibulum vel ex dictum, dictum nisi at, iaculis sapien. In lacinia fermentum imperdiet.
Phasellus quis magna tellus. Quisque vulputate vel neque quis consequat. Nulla sollicitudin mauris in est feugiat porta. In nec nisi semper, bibendum sem quis, ornare dolor. Nulla a erat eros. Ut at orci varius, pretium mauris ac, ultricies dui</p>
                          </Card.Text>
                       </Card.Body>
                   </Card>
                </Col>
                <Col 
                xs={10}
                sm={10}
                md={4}
                lg={4}
                >
                   <Card style={{boxShadow:"5px 5px 10px black",marginBottom:"20px"}}>
                       <Card.Header style={{backgroundColor:"#161C27",height:"40px",color:"white"}}>
                           Current Job Status
                       </Card.Header>
                       <Card.Body style={{backgroundColor:"#1C2331",color:"white"}}>
                           <Card.Text>
                           <p style={{fontSize:"12px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget auctor eros, at dapibus orci. Aliquam ornare odio ac magna porttitor, eu tincidunt mi accumsan. Praesent fringilla massa pellentesque elit fermentum tincidunt. Aenean non justo et neque vulputate lobortis quis vel nunc. Nullam a blandit sapien, sed rhoncus odio. Vestibulum vel ex dictum, dictum nisi at, iaculis sapien. In lacinia fermentum imperdiet.
Phasellus quis magna tellus. Quisque vulputate vel neque quis consequat. Nulla sollicitudin mauris in est feugiat porta. In nec nisi semper, bibendum sem quis, ornare dolor. Nulla a erat eros. Ut at orci varius, pretium mauris ac, ultricies dui</p>
                          </Card.Text>
                       </Card.Body>
                   </Card>
                </Col>
            </Row>
            <Row>
                <br />
                <br />
                <br />
            </Row>
        </Container>
        <Container style={{backgroundColor:"darkgrey"}} fluid>
            <Row>
                <hr style={{boxShadow:"10px 10px 20px black"}}/>
            </Row>
            <Row>
                <br />
                <br />
                <br />
            </Row>
        </Container>
        <Container style={{backgroundColor:"darkgrey"}} fluid>
            <Row>
                <Col 
                xs={10}
                sm={10}
                md={4}
                lg={4}
                >
                    <Card style={{boxShadow:"5px 5px 10px black",marginBottom:"20px"}}>
                       <Card.Header style={{backgroundColor:"#161C27",height:"40px",color:"white"}}>
                           Feedback and Reviews
                       </Card.Header>
                       <Card.Body style={{backgroundColor:"#1C2331",color:"white"}}>
                           <Card.Text>
                           <Button variant="outline-light m-2">Give Feedback for Profile</Button><Button variant="outline-light m-2">View Uploaded Feedbacks</Button><br />
                            <Button variant="outline-light m-2">Suggestion Box</Button>
                          </Card.Text>
                       </Card.Body>
                   </Card>
                </Col>
                <Col 
                xs={10}
                sm={10}
                md={4}
                lg={4}
                >
                    <Card style={{boxShadow:"5px 5px 10px black",marginBottom:"20px"}}>
                       <Card.Header style={{backgroundColor:"#161C27",height:"40px",color:"white"}}>
                           Personal Links
                       </Card.Header>
                       <Card.Body style={{backgroundColor:"#1C2331",color:"white"}}>
                           <Card.Text>
                           <Button variant="outline-light m-2">View Resume</Button><Button variant="outline-light m-2">Upload Resume</Button><br />
                            <Button variant="outline-light m-2">View Certificates</Button><Button variant="outline-light m-2">Upload Certificates</Button><br />
                            <Button variant="outline-light m-2"> Media Links </Button><Button variant="outline-light m-2">Add Media Links</Button>
                          </Card.Text>
                       </Card.Body>
                   </Card>
                </Col>
                <Col 
                xs={10}
                sm={10}
                md={4}
                lg={4}
                >
                    <Card style={{boxShadow:"5px 5px 10px black",marginBottom:"20px"}}>
                       <Card.Header style={{backgroundColor:"#161C27",height:"40px",color:"white"}}>
                           Contact Information
                       </Card.Header>
                       <Card.Body style={{backgroundColor:"#1C2331",color:"white"}}>
                       <Card.Text>
                           <p style={{fontSize:"12px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget auctor eros, at dapibus orci. Aliquam ornare odio ac magna porttitor, eu tincidunt mi accumsan. Praesent fringilla massa pellentesque elit fermentum tincidunt. Aenean non justo et neque vulputate lobortis quis vel nunc. Nullam a blandit sapien, sed rhoncus odio. Vestibulum vel ex dictum, dictum nisi at, iaculis sapien. In lacinia fermentum imperdiet.
Phasellus quis magna tellus. Quisque vulputate vel neque quis consequat. Nulla sollicitudin mauris in est feugiat porta. In nec nisi semper, bibendum sem quis, ornare dolor. Nulla a erat eros. Ut at orci varius, pretium mauris ac, ultricies dui</p>
                          </Card.Text>
                       </Card.Body>
                   </Card>
                </Col>
            </Row>
            <Row>
                <br />
                <br />
                <br />
            </Row>
        </Container>
    </>);
    }
};
export default About;