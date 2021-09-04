import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Button,Modal,Navbar,Container,Nav } from 'react-bootstrap';
import {InputGroup,FormControl} from 'react-bootstrap';
import { CloseButton } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
class NavBar extends Component
{
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
  render()
  {
    var Logo = require('../../images/portifolio.png');
    return (<>
    <div>
          <div>
          <div>
                <Modal show={this.state.showHide}>
                <Card style={{boxShadow:"5px 5px 10px black"}}>
                       <Card.Header style={{backgroundColor:"#161C27",height:"45px",color:"white"}}>
                       <div className="row">
                       <div class="col-11">
                                Login
                       </div>
                       <div class="col-1">
                       <span style={{color:"grey",backgroundColor:"transparent",textDecoration:"none",cursor:"pointer"}} onClick={() => this.handleModalShowHide()}><i class="far fa-times-circle"></i></span>
                        </div>
                       </div>
                       </Card.Header>
                       <Card.Body style={{backgroundColor:"#1C2331",color:"white"}}>
                           <Card.Text>
                           <form>
                                <div class="form-row">
                                    <div class="form-group col-sm-10">
                                        <label class="sr-only" for="exampleInputEmail3">username</label>
                                        <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                                        <FormControl
                                            placeholder="username"
                                            aria-label="username"
                                            aria-describedby="basic-addon1"
                                        />
                                        </InputGroup>
                                    </div>
                                
                                    <div class="form-group col-sm-10">
                                        <label class="sr-only" for="exampleInputPassword3">Password</label>
                                        <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon1"><i class="fa fa-key" aria-hidden="true"></i></InputGroup.Text>
                                        <FormControl
                                            placeholder="Password"
                                            aria-label="Password"
                                            aria-describedby="basic-addon2"
                                        />
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
                                    <button type="button" class="btn btn-secondary btn-sm ml-auto" style={{margin:"10px",boxShadow:"1px 1px 10px black"}} onClick={() => {this.handleModalShowHide()}}> Cancel </button>
                                    <button type="submit" class="btn btn-primary btn-sm ml-1" style={{margin:"10px",boxShadow:"1px 1px 10px black"}}> Save </button>
                                </div>
                            </form>
                          </Card.Text>
                       </Card.Body>
                   </Card>
                </Modal>
          </div>
    </div>

<Navbar collapseOnSelect expand="lg" style={{backgroundColor:"#1C2331",color:"white"}}>
  <a className="navbar-brand" style={{color:"white",margin:"10px"}} href="/"><img src={Logo.default} className="img-fluid" height="150" width="150"/></a>
            
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
        <NavLink style={{ textDecoration: 'none' ,color:"white",opacity:"80%",verticalAlign: "text-top",marginLeft:"5px",marginRight:"5px"}} to="./"> <span class="fa fa-home fa-lg"> </span>Home </NavLink>
        <NavLink style={{ textDecoration: 'none' ,color:"white",opacity:"80%",verticalAlign: "text-top",marginLeft:"5px",marginRight:"5px"}} to="./about"> <span class="fa fa-info fa-lg"> </span>About </NavLink>
        <NavLink style={{ textDecoration: 'none' ,color:"white",opacity:"80%",verticalAlign: "text-top",marginLeft:"5px",marginRight:"5px"}} to="./contact"> <span class="fa fa-address-card fa-lg"> </span>Contact </NavLink>
    </Nav>
    <div className="navbar-text" style={{alignText:"center",color:"white"}}>
                <span class="navbar-text">
                    <a id="loginClick" class="btn" style={{ textDecoration: 'none' ,color:"white",opacity:"80%",fontSize:"30px"}}>
                    <span class="fa fa-comment-alt"></span></a>
                </span>
                <span class="navbar-text">
                    <a id="loginClick" class="btn" style={{ textDecoration: 'none' ,color:"white",opacity:"80%"}} onClick={() => this.handleModalShowHide()}>
                    <span class="fa fa-sign-in"></span> Login </a>
                </span>
    </div>
  </Navbar.Collapse>
</Navbar>
</div>
</>
    )
  }
};

export default NavBar;