import React from 'react';
import { NavLink } from 'react-router-dom';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { useState, useEffect } from 'react';

const NavBar = () => {
  var Logo = require('../../images/portifolio.png');
    return (<>
    <div>
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
                <span class="navbar-text">
                    <a id="loginClick" class="btn" >
                    <span class="fa fa-sign-in"></span> Login</a>
                </span>
            </div>
        </div>
    </nav>
    
    </div>
</>
    )
};

export default NavBar;