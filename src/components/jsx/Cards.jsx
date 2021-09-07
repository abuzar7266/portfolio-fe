import React, { Component } from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../css/cards.css';
import { Button,Modal} from 'react-bootstrap';
import {InputGroup,FormControl} from 'react-bootstrap';
import { CloseButton } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Container,Row,Col } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { responsive2 } from "./CardSlider";
import Carousel from "react-multi-carousel";
import { Link } from 'react-router-dom';
class Cards extends Component{
  constructor(props)
    {
        super(props);
        this.state = {
            showHide : false
        }
    }
    handleModalShowHide() 
    {
          this.setState({ showHide: !this.state.showHide })
    }
    render(){
        var {CardData} = this.props;
return (<>
  <div>
          <Container fluid>
          <Col 
                  xs={10}
                  sm={10}
                  md={11}
                  lg={12}
                  >
              <Modal show={this.state.showHide}>
                <Row>
                <Col md={12}>
                <Card className="modal-full" style={{boxShadow:"5px 5px 10px black"}}>
                       <Card.Header style={{backgroundColor:"#161C27",minheight:"40px",color:"white"}}>
                       <div className="row">
                       <div class="col-11">
                       {CardData.type}
                       </div>
                       <div class="col-1">
                       <span style={{color:"grey",backgroundColor:"transparent",textDecoration:"none",cursor:"pointer"}} onClick={() => this.handleModalShowHide()}><i class="far fa-times-circle"></i></span>
                        </div>
                       </div>
                       </Card.Header>
                       <Card.Body style={{backgroundColor:"white",color:"black",border:"1px solid black"}}>
                           <Card.Text>
                            <Row style={{margin:"10px",marginTop:"30px",fontSize:"24px"}}>
                            <div className="col-12">
                              <p style={{backgroundColor:"#161C27",color:"white",border:"1px solid white",borderRadius:"10%",boxShadow:"0px 5px 10px black"}} >{CardData.title}</p>
                            </div>
                            </Row>
                            <Row>
                              <Carousel responsive={responsive2}>
                                <div className="col-12">
                                    <Image className="img-thumbnail bg-dark" height="300px" width="500px" bg-dark src={CardData.image.default} fluid></Image>
                                </div>
                                <div className="col-12">
                                    <Image className="img-thumbnail bg-dark"  height="300px" width="500px"  src={CardData.image.default} fluid></Image>
                                </div>
                                <div className="col-12">
                                    <Image className="img-thumbnail bg-dark"  height="300px" width="500px"  src={CardData.image.default} fluid></Image>
                                </div>
                              </Carousel>
                            </Row>
                            <Row style={{marginLeft:"10px",marginRight:"10px",marginTop:"30px"}}>
                              <hr />
                            </Row>
                            <Row>
                              <p style={{border:"1px solid #161C27",fontSize:"14px"}}><div style={{margin:"10px"}}>{CardData.text}</div></p>
                            </Row>
                           </Card.Text>
                       </Card.Body>
                       <Card.Footer style={{backgroundColor:"#1C2331",color:"white"}}>
                         <p style={{border:"1px solid #161C27",color:"white",opacity:"50%",fontSize:"14px"}}><i>GithubLink will be provided here</i></p>
                       </Card.Footer>
                   </Card>
                   </Col>
                   </Row>
                </Modal>
              </Col>
          </Container>
      <div>
          <div className="card card-outer" >
          <Link className="Link-Style-2" to={`/Post/${CardData.PId}`}>
            <img className="card-img-top card-img" src={CardData.image.default} alt="Card image cap"/>
            <div className="card-body">
            <h5 className="card-title head-flow" style={{fontSize:"14px",height:"20px"}}>{CardData.title}</h5>
            <div id={CardData.PId}>
              <p className="card-text text-flow" style={{fontSize:"11px",textAlign:"left",height:"95px"}}>{CardData.text}</p>
            </div>
            </div>
          </Link>
          <div className="card-footer" style={{height:"60px"}}>
          <Link to="#" className="btn btn-sm Post-Icons" style={{color:"grey",height:"65px"}}> <i className="fas fa-edit"> </i></Link>
          <Link to="#" className="btn btn-sm Post-Icons" style={{color:"grey",height:"65px"}}> <i className="fas fa-times"> </i></Link>
          </div>
          </div>
      </div>
  </div>
        </>)
    }
}
{/*<div className="card-footer">
          <a href="#" className="btn btn-sm" style={{color:"grey"}}> <i className="fas fa-edit"> </i></a>
          <a href="#" className="btn btn-sm" style={{color:"grey"}}> <i className="fas fa-times"> </i></a>
        </div>*/}
export default Cards;