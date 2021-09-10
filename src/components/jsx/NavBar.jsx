import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Modal,Navbar,Container,Nav } from 'react-bootstrap';
import {InputGroup,FormControl} from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Col,Row } from 'react-bootstrap';
import '../css/styles.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import { Button } from 'react-bootstrap';
class NavBar extends Component
{
  constructor(props)
    {
        super(props);
        this.state = {
            showHide : false,
            username:"",
            password:"",
            activeClass:"Home"
        }
    }
  handleActiveClass(u)
  {
    this.setState({ activeClass: u})
  }
  handleModalShowHide(u,p) 
  {
        this.setState({ showHide: !this.state.showHide,username:u,password:p })
  }
  handleSubmit = async (e) => {
      e.preventDefault();
      const data = {
          username: this.username,
          password:this.password
      }
      axios.post( 'users/login',data)
      .then(res=>{
          localStorage.setItem('token',res.data.token);
      })
      this.setState({ showHide: !this.state.showHide});
  }
  handleLogout = async () =>{
      localStorage.removeItem('token');
  }
  render()
  {
    var Logo = require('../../images/portifolio.png');
    return (<>
    <div>
          <div>
          <div>
                <Modal show={this.state.showHide}>
                <Card style={{boxShadow:"5px 5px 10px black"}}>
                       <Card.Header style={{backgroundColor:"#161C27",minheight:"45px",color:"white"}}>
                       <div className="row">
                       <div class="col-11">
                                Login
                       </div>
                       <div class="col-1">
                       <span style={{color:"grey",backgroundColor:"transparent",textDecoration:"none",cursor:"pointer"}} onClick={() => this.handleModalShowHide("Hi","y")}><i class="far fa-times-circle"></i></span>
                        </div>
                       </div>
                       </Card.Header>
                       <Card.Body style={{backgroundColor:"#1C2331",color:"white"}}>
                           <Card.Text>
                           <form onSubmit={this.handleSubmit} method="post" action="./">
                                <div class="form-row">
                                    <div class="form-group col-sm-10">
                                        <label class="sr-only" for="exampleInputEmail3">username</label>
                                        <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                                        <FormControl
                                            placeholder="username"
                                            aria-label="username"
                                            aria-describedby="basic-addon1"
                                            value={this.state.username}
                                            name="username"
                                            onChange={e=>{ this.username = e.target.value}}
                                            required/>
                                        </InputGroup>
                                    </div>
                                
                                    <div class="form-group col-sm-10">
                                        <label class="sr-only" for="exampleInputPassword3">Password</label>
                                        <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon1"><i class="fa fa-key" aria-hidden="true"></i></InputGroup.Text>
                                        <FormControl
                                            type="password"
                                            placeholder="Password"
                                            aria-label="Password"
                                            aria-describedby="basic-addon2"
                                            value={this.state.password}
                                            name="password"
                                            onChange={e=>{ this.password = e.target.value }}
                                            required/>
                                        </InputGroup>
                                    </div>
                                    <div class="col-sm-auto" style={{textAlign:"left"}}>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox"/>
                                            <label class="form-check-label">Remember me
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <button type="submit" class="btn btn-primary btn-sm ml-1" style={{margin:"10px",boxShadow:"1px 1px 10px black"}}> Sign-up </button>
                                </div>
                            </form>
                          </Card.Text>
                       </Card.Body>
                   </Card>
                </Modal>
          </div>
    </div>
<Container fluid>
    <Row>
        <Navbar collapseOnSelect expand="lg" style={{backgroundColor:"#1C2331",color:"white"}}>
            <div className="order-lg-2 order-2">
                            <div className="navbar-text" style={{alignText:"center",color:"white"}}>
                            <span class="navbar-text">
                                {!(localStorage.getItem('token'))?<Link id="loginClick" class="btn" style={{ textDecoration: 'none' ,color:"white",opacity:"80%"}} onClick={() => this.handleModalShowHide()}>
                                <span class="fa fa-sign-in"></span> Login </Link>:<Link id="loginClick" class="btn" style={{ textDecoration: 'none' ,color:"white",opacity:"80%"}} onClick={() => this.handleLogout()}>
                                <span class="fa fa-sign-in"></span> Logout </Link>}
                            </span>
            </div>
            </div>
            <div className="order-lg-0 order-1"><Col 
                xs={10}
                sm={10}
                md={10}
                lg={10}
                style={{textAlign:"left"}}><Link className="navbar-brand" style={{color:"white",margin:"10px"}} to="/"><img src={Logo.default} className="img-fluid" height="150" width="150"/></Link>          
            </Col></div>
            <div className="order-lg-5 order-0"><Navbar.Toggle aria-controls="responsive-navbar-nav" /></div>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Col
                    xs={12}
                    sm={12}
                    md={12}
                    lg={3}h
                    style={{margin:"10px"}}>
                    <NavLink activeClassName="is-active" className="Link-Style" style={{color:"white",textDecoration:"none"}} exact={true}  to="./" > Home </NavLink></Col>
                    <Col
                    xs={12}
                    sm={12}
                    md={12}
                    lg={3}
                    style={{margin:"10px"}}><NavLink  className="Link-Style" activeClassName="is-active" style={{color:"white",textDecoration:"none"}} exact={true} to="./about" > About </NavLink></Col>
                    <Col
                    xs={12}
                    sm={12}
                    md={12}
                    lg={3}
                    style={{margin:"10px"}}><NavLink  className="Link-Style" activeClassName="is-active" style={{color:"white",textDecoration:"none"}} exact={true} to="./contact" > Contact </NavLink></Col>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </Row>
</Container>
</div>
</>
    )
  }
};

export default NavBar;