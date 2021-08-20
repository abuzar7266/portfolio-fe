import React from 'react';
import { NavLink } from 'react-router-dom';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { useState, useEffect } from 'react';
import { Button,Modal } from 'react-bootstrap'
class NavBar extends React.Component
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
                    <Modal show={this.state.showHide}>
                    <Modal.Header style={{backgroundColor:"#1C2331",color:"grey"}} closeButton onClick={() => this.handleModalShowHide()}>
                    <Modal.Title color="red">Login</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <form>
                        <div class="form-row">
                            <div class="form-group col-sm-10">
                                <label class="sr-only" for="exampleInputEmail3">Email address</label>
                                <input type="email" class="form-control form-control-sm mr-1" id="exampleInputEmail3" placeholder="Enter email"/>
                            </div>
                            <br />
                            <div class="form-group col-sm-10">
                                <label class="sr-only" for="exampleInputPassword3">Password</label>
                                <input type="password" class="form-control form-control-sm mr-1" id="exampleInputPassword3" placeholder="Password"/>
                            </div>
                            <div class="col-sm-auto">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox"/>
                                    <label class="form-check-label"> Remember me
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="form-row">
                            <button type="button" class="btn btn-secondary btn-sm ml-auto" onClick={() => this.handleModalShowHide()} id="loginCancel">Cancel</button>
                            <button type="submit" class="btn btn-primary btn-sm ml-1">Sign in</button>
                        </div>
                    </form>
                    </Modal.Body>
                    <Modal.Footer>
                    </Modal.Footer>
                </Modal>
          </div>
    <nav class="navbar navStyle navbar-dark navbar-expand-sm fixed-top" style={{color:"white",backgroundColor:"#1C2331"}}>
        <div class="container">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#Navbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <a href="/"><img src={Logo.default} style={{paddingRight:"40px",height:"40px",width:"80px"}}/></a>
            <div class="collapse navbar-collapse" id="Navbar" >
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active"><NavLink class="nav-link" to="./"> <span class="fa fa-home fa-lg"> </span> Home</NavLink></li>
                    <li class="nav-item"><NavLink class="nav-link" to="./about"> <span class="fa fa-info fa-lg"> </span> About</NavLink></li>
                    <li class="nav-item"><NavLink class="nav-link" to="./contact"> <span class="fa fa-address-card fa-lg"> </span> Contact</NavLink></li>
                </ul>
                <div className="navbar-text mr-auto">
                <span class="navbar-text">
                    <a id="loginClick" class="btn" onClick={() => this.handleModalShowHide()}>
                    <span class="fa fa-sign-in"></span> Login </a>
                </span>
                </div>
            </div>
        </div>
    </nav>
    
    </div>
</>
    )
  }
};

export default NavBar;