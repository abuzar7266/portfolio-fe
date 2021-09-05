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
        <Container fluid>
            <Row>
                <Col xs={0}
                    sm={0}
                    md={1}
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
                    lg={2}
                    style={{textAlign:'left',overflow:"hidden"}}
                    className="align-self-center"
                >
                <Card style={{boxShadow:"5px 5px 10px black",marginBottom:"20px"}}>
                       <Card.Header style={{backgroundColor:"#161C27",height:"40px",color:"white"}}>
                            <i className="fa fa-info"></i> Information
                       </Card.Header>
                       <Card.Body style={{backgroundColor:"#1C2331",color:"white"}}>
                           <Card.Text style={{marginLeft:"10px"}}>
                           <p style={{fontSize:"12px"}}><b>Name</b>: Abuzar</p>
                           <p style={{fontSize:"12px"}}><b>Degree Pursuing </b>: BS(CS)</p>
                           <p style={{fontSize:"12px"}}><b>Country </b>: Pakistan</p>
                           <p style={{fontSize:"12px"}}><b>Home City </b>: Gujrawala</p>
                           <p style={{fontSize:"12px"}}><b>Current City</b>: Islamabad</p>
                          </Card.Text>
                       </Card.Body>
                   </Card>
                </Col>
                <Col 
                    xs={10}
                    sm={10}
                    md={4}
                    lg={2}
                    style={{textAlign:'left',overflow:"hidden"}}
                    className="align-self-center"
                >
                <Card style={{boxShadow:"5px 5px 10px black",marginBottom:"20px"}}>
                       <Card.Header style={{backgroundColor:"#161C27",height:"40px",color:"white"}}>
                           Work Experience
                       </Card.Header>
                       <Card.Body style={{backgroundColor:"#1C2331",color:"white"}}>
                           <Card.Text>
                           <p style={{fontSize:"12px"}}>Teaching Assistant at FAST NUCES <p style={{fontSize:"10px",color:"white",opacity:"80%"}}>Islamabad, Pakistan <p style={{fontSize:"7px",color:"white",opacity:"80%"}}>Sep 2021 - Present</p> </p> </p>
                           <p style={{fontSize:"12px"}}>Officer Buddy at National University Computing Society <p style={{fontSize:"8px",color:"white",opacity:"80%"}}> FAST NUCES <p style={{fontSize:"10px",color:"white",opacity:"80%"}}>Islamabad, Pakistan <p style={{fontSize:"7px",color:"white",opacity:"80%"}}>Sep 2021 - Present</p> </p> </p> </p>
                          </Card.Text>
                       </Card.Body>
                </Card>
                </Col>
            </Row>
            <Row>
                <Col xs={0}
                    sm={0}
                    md={0}
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
                           Education
                       </Card.Header>
                       <Card.Body style={{backgroundColor:"#1C2331",color:"white"}}>
                           <Card.Text>
                           <p style={{fontSize:"12px"}}> <i className="fa fa-certificate"></i> Python & ML-Libs<p style={{fontSize:"12px"}}>  <i className="fa fa-certificate"></i>  C++ <p style={{fontSize:"12px"}}>  <i className="fa fa-certificate"></i>  R-Lang <p style={{fontSize:"12px"}}>  <i className="fa fa-certificate"></i>  React.js and React Native <p style={{fontSize:"12px"}}>  <i className="fa fa-certificate"></i> Bootstrap 5 </p> </p></p></p></p>
                          </Card.Text>
                       </Card.Body>
                   </Card>
                </Col> 
                <Col 
                    xs={10}
                    sm={10}
                    md={4}
                    lg={2}
                    style={{textAlign:'left',overflow:"hidden"}}
                    className="align-self-center"
                >
                    <Card style={{boxShadow:"5px 5px 10px black",marginBottom:"20px"}}>
                       <Card.Header style={{backgroundColor:"#161C27",height:"40px",color:"white"}}>
                           Education
                       </Card.Header>
                       <Card.Body style={{backgroundColor:"#1C2331",color:"white"}}>
                           <Card.Text>
                           <p style={{fontSize:"12px"}}>Bachelors in Computer Science<p style={{fontSize:"10px",color:"white",opacity:"80%"}}> FAST NUCES <p style={{fontSize:"8px",color:"white",opacity:"80%"}}>Islamabad, Pakistan <p style={{fontSize:"7px",color:"white",opacity:"80%"}}>Sep 2021 - Present</p> </p> </p> </p>
                           <p style={{fontSize:"12px"}}>Intermediate in Computer Science (I.C.S)<p style={{fontSize:"10px",color:"white",opacity:"80%"}}> Punjab Group Of Colleges<p style={{fontSize:"8px",color:"white",opacity:"80%"}}>Gujranwala, Pakistan <p style={{fontSize:"7px",color:"white",opacity:"80%"}}>Sep 2021 - Present</p> </p> </p> </p>
                          </Card.Text>
                       </Card.Body>
                   </Card>
                </Col> 
                <Col 
                    xs={10}
                    sm={10}
                    md={4}
                    lg={2}
                    style={{textAlign:'left',overflow:"hidden"}}
                    className="align-self-center"
                >
                <Card style={{boxShadow:"5px 5px 10px black",marginBottom:"20px"}}>
                       <Card.Header style={{backgroundColor:"#161C27",height:"40px",color:"white"}}>
                           Soft Skills
                       </Card.Header>
                       <Card.Body style={{backgroundColor:"#1C2331",color:"white"}}>
                           <Card.Text>
                           <p style={{fontSize:"12px"}}> <i className="fa fa-certificate"></i> Effective Communication <p style={{fontSize:"12px"}}> <i className="fa fa-certificate"></i> Team Work <p style={{fontSize:"12px"}}> <i className="fa fa-certificate"></i> Problem-Solving </p></p></p>
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
                    lg={2}
                    style={{textAlign:'left',overflow:"hidden"}}
                    className="align-self-center"
                >
                <Card style={{boxShadow:"5px 5px 10px black",marginBottom:"20px"}}>
                       <Card.Header style={{backgroundColor:"#161C27",height:"40px",color:"white"}}>
                           Hobbies
                       </Card.Header>
                       <Card.Body style={{backgroundColor:"#1C2331",color:"white"}}>
                           <Card.Text>
                           <p style={{fontSize:"12px"}}> <i className="fa fa-certificate"></i> Writing Programs <p style={{fontSize:"12px"}}> <i className="fa fa-certificate"></i> Travelling <p style={{fontSize:"12px"}}> <i className="fa fa-certificate"></i> Gaming <p style={{fontSize:"12px"}}> <i className="fa fa-certificate"></i> Graphics Designing </p> </p> </p> </p>
                          </Card.Text>
                       </Card.Body>
                   </Card>
                </Col>
                <Col 
                    xs={10}
                    sm={10}
                    md={4}
                    lg={2}
                    style={{textAlign:'left',overflow:"hidden"}}
                    className="align-self-center"
                >
                    <Card style={{boxShadow:"5px 5px 10px black",marginBottom:"20px"}}>
                       <Card.Header style={{backgroundColor:"#161C27",height:"40px",color:"white"}}>
                           Areas of Expertise
                       </Card.Header>
                       <Card.Body style={{backgroundColor:"#1C2331",color:"white"}}>
                           <Card.Text>
                           <p style={{fontSize:"12px"}}> <i className="fa fa-certificate"></i> Machine Learning /Deep Learning <p style={{fontSize:"12px"}}> <i className="fa fa-certificate"></i> Web-Development <p style={{fontSize:"12px"}}> <i className="fa fa-certificate"></i> Graphics Designer <p style={{fontSize:"12px"}}> <i className="fa fa-certificate"></i> Game Development </p> </p> </p> </p>
                          </Card.Text>
                       </Card.Body>
                   </Card>
                </Col>
            </Row>
            <Row>
                <Col 
                    xs={0}
                    sm={0}
                    md={3}
                    lg={4}
                >
                </Col>
                <Col 
                    xs={10}
                    sm={10}
                    md={4}
                    lg={2}
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
                    lg={2}
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