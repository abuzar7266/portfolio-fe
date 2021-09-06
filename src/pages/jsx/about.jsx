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
                    md={0}
                    lg={1}>
                </Col>
                <Col 
                    xs={10}
                    sm={10}
                    md={4}
                    lg={3}
                    
                    style={{color:"white",textAlign:"center" }}
                    className="align-self-center"
                >
                    <Card style={{boxShadow:"5px 5px 10px black",marginBottom:"20px",minHeight:"260px"}}>
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
                <Card style={{boxShadow:"5px 5px 10px black",marginBottom:"20px",minHeight:"260px"}}>
                       <Card.Header style={{backgroundColor:"#161C27",height:"40px",color:"white"}}>
                            <i className="fa fa-info"></i> Information
                       </Card.Header>
                       <Card.Body style={{backgroundColor:"#1C2331",color:"white"}}>
                           <Card.Text style={{marginLeft:"10px"}}>
                           <p style={{fontSize:"12px"}}><b>Name</b>: Abuzar <p style={{fontSize:"12px"}}><b>Degree Pursuing </b>: BS(CS)                           <p style={{fontSize:"12px"}}><b>Country </b>: Pakistan <p style={{fontSize:"12px"}}><b>Home City </b>: Gujrawala <p style={{fontSize:"12px"}}><b>Current City</b>: Islamabad</p> </p> </p> </p> </p>
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
                <Card style={{boxShadow:"5px 5px 10px black",marginBottom:"20px",minHeight:"260px"}}>
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
                    lg={1}>
                </Col>
                <Col 
                    xs={10}
                    sm={10}
                    md={4}
                    lg={3}
                    style={{textAlign:'left',overflow:"hidden"}}
                    className="align-self-center"
                >
                <Card style={{boxShadow:"5px 5px 10px black",marginBottom:"20px",minHeight:"260px"}}>
                       <Card.Header style={{backgroundColor:"#161C27",height:"40px",color:"white"}}>
                           Tools
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
                    lg={3}
                    style={{textAlign:'left',overflow:"hidden"}}
                    className="align-self-center"
                >
                    <Card style={{boxShadow:"5px 5px 10px black",marginBottom:"20px",minHeight:"260px"}}>
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
                    lg={3}
                    style={{textAlign:'left',overflow:"hidden"}}
                    className="align-self-center"
                >
                <Card style={{boxShadow:"5px 5px 10px black",marginBottom:"20px",minHeight:"260px"}}>
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
                    md={0}
                    lg={1}>

                </Col>
                
            
                <Col 
                    xs={10}
                    sm={10}
                    md={4}
                    lg={3}
                    style={{textAlign:'left',overflow:"hidden"}}
                    className="align-self-center"
                >
                <Card style={{boxShadow:"5px 5px 10px black",marginBottom:"20px",minHeight:"260px"}}>
                       <Card.Header style={{backgroundColor:"#161C27",height:"40px",color:"white"}}>
                            <i className="fa fa-info"></i> Technical Skills
                       </Card.Header>
                       <Card.Body style={{backgroundColor:"#1C2331",color:"white"}}>
                           <Card.Text style={{marginLeft:"10px"}}>
                           <p style={{fontSize:"12px"}}> <i className="fa fa-certificate"></i> Data Analysis <p style={{fontSize:"12px"}}> <i className="fa fa-certificate"></i> Multiple Programming Languages <p style={{fontSize:"12px"}}> <i className="fa fa-certificate"></i> Project-Management <p style={{fontSize:"12px"}}> <i className="fa fa-certificate"></i> Databases expert(Oracle,MongoDB Cloud Atlas) </p> </p></p></p>
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
                <Card style={{boxShadow:"5px 5px 10px black",marginBottom:"20px",minHeight:"260px"}}>
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
                    lg={3}
                    style={{textAlign:'left',overflow:"hidden"}}
                    className="align-self-center"
                >
                    <Card style={{boxShadow:"5px 5px 10px black",marginBottom:"20px",minHeight:"260px"}}>
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
        </Container>
        </div>
        <Container style={{backgroundColor:"darkgrey"}} fluid>
            <Row>
                <hr style={{boxShadow:"10px 10px 20px black"}}/>
            </Row>
            <Row>
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
                  <Card style={{boxShadow:"5px 5px 10px black",marginBottom:"20px",minHeight:"320px"}}>
                       <Card.Header style={{backgroundColor:"#161C27",height:"40px",color:"white"}}>
                           Future Vision
                       </Card.Header>
                       <Card.Body style={{backgroundColor:"#1C2331",color:"white"}}>
                           <Card.Text>
                           <p style={{fontSize:"12px"}}>fields of Datascience significantly grew in the past few years and it will grow even more.My aim is to become one datascience researcher who knows several ways to understand one simple problem and also i want to sharpen my mind to be able to understand others knowledge to take my base from them and extend those researches.I do not aim on making progress on my own but want to be dependable.I want to appreciate other researches and if i could i would extend those researhes and make them basis of my researches.I want to grow professionally and socially and hope to build an environment where people share all the stuff related to Datascience and eager to devote their life for the sake of Datascience and for the sake of our future generations.Datascience can help us make world a better place if and only if it is used on the right way.So i want to make sure that it goes onto right and good path. </p>
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
                  <Card style={{boxShadow:"5px 5px 10px black",marginBottom:"20px",minHeight:"320px"}}>
                       <Card.Header style={{backgroundColor:"#161C27",height:"40px",color:"white"}}>
                           Profile Summary
                       </Card.Header>
                       <Card.Body style={{backgroundColor:"#1C2331",color:"white"}}>
                           <Card.Text>
                           <p style={{fontSize:"12px"}}>Abuzar is a Datascience enthusiast who was born in gujranwala and currently lives in Islamabad in order to pursue his degree of Bachelors in Computer Science.His hobbies include Gaming, Travelling, Graphics Designing and abuzar have soft skills of effective communication, Team work, Problem solving.His expertise include Web and Mobile applications development,Machine learning, Game Development.Abuzar is technically skilled in databases and multiple programming languages , Web development frameworks and libraries and Skilled in Project managment.Abuzar is highly skilled in web-development,mobile applications development Hybrid applications development.Abuzar spent some time gaining experience within University,Like Teaching Assistant for Operating Systems and Officer Buddy at National University Computing Society.Abuzar is eager to learn different datascience paradigms and he aims to become researcher in this field who will devote his life learning and making this world a better place with his research.</p>
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
                   <Card style={{boxShadow:"5px 5px 10px black",marginBottom:"20px",minHeight:"320px"}}>
                       <Card.Header style={{backgroundColor:"#161C27",height:"40px",color:"white"}}>
                           Current Job Status
                       </Card.Header>
                       <Card.Body style={{backgroundColor:"#1C2331",color:"white"}}>
                           <Card.Text>
                           <p style={{fontSize:"12px"}}>Abuzar is currently unemployed and seeking opportunities for internship - paid or unpaid - in order gain experience and after Completing the gradution abuzar aims to work in research lab while learning for his Masters and Phd studies.But before stepping onto masters and phd studies,abuzar seeks job opportunities for the sake of gaining experience </p>
                          </Card.Text>
                       </Card.Body>
                   </Card>
                </Col>
            </Row>
            <Row>
                <br />
                
            </Row>
        </Container>
        <Container style={{backgroundColor:"darkgrey"}} fluid>
            <Row>
                <hr style={{boxShadow:"10px 10px 20px black"}}/>
            </Row>
            <Row>
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
                    <Card style={{boxShadow:"5px 5px 10px black",marginBottom:"20px",minHeight:"235px"}}>
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
                    <Card style={{boxShadow:"5px 5px 10px black",marginBottom:"20px",minHeight:"235px"}}>
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
                    <Card style={{boxShadow:"5px 5px 10px black",marginBottom:"20px",minHeight:"235px"}}>
                       <Card.Header style={{backgroundColor:"#161C27",height:"40px",color:"white"}}>
                           Contact Information
                       </Card.Header>
                       <Card.Body style={{backgroundColor:"#1C2331",color:"white"}}>
                       <Card.Text>
                           <p style={{fontSize:"12px",textAlign:"left",marginLeft:"40px",marginTop:"20px"}}>Mobile No. : +92 316 7815 023 <p style={{fontSize:"12px"}}>Mobile No. : +92 305 6243 600 <p style={{fontSize:"12px"}}>Mobile No. : +92 316 7856 321 <p style={{fontSize:"12px"}}>Email : abuzar.m7266@gmail.com <p style={{fontSize:"12px"}}>Instagram : @abzuar._123</p></p></p></p> </p>
                          </Card.Text>
                       </Card.Body>
                   </Card>
                </Col>
            </Row>
            <Row>
                <br />
                
            </Row>
        </Container>
    </>);
    }
};
export default About;