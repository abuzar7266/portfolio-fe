import React, { Component } from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../css/styles.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

class Footer extends Component 
{
    constructor(){
      super();
      this.state={
        seeMoreLink:"",
        productBlockLinks:[],
        usefulLinks:[],
        ContactDetails:{
          Address:"",
          Email:"",
          MobileNo:"",
          FaxNo:"",
          SocialLinks:{}
        }
      }
    }
    render() { 
        return ( <>


<footer

          className="text-center text-lg-start text-white"
          style={{backgroundColor: "#1c2331"}}
          >
    <section
             className="d-flex justify-content-between p-4"
             style={{backgroundColor: "#6351ce"}}
             >
      
      <div className="me-5">
        <span>Connect with us on Social Media:</span>
      </div>
      
      <div>
        <a href="" className="text-white me-4">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="" className="text-white me-4">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="" className="text-white me-4">
          <i className="fab fa-google"></i>
        </a>
        <a href="" className="text-white me-4">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="" className="text-white me-4">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="" className="text-white me-4">
          <i className="fab fa-github"></i>
        </a>
      </div>
    
    </section>
    
    <section className="">
      <div className="container text-center text-md-start mt-5">
        
        <div className="row mt-3">
          
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            
            <h6 className="text-uppercase fw-bold">Portifolio</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}}
                />
            <p>
            I've always wondered about the world and everything that has been created and I've always been curious about the different technologies in the world<a href="/about" style={{textDecoration:"none",color:"grey"}}>...See More</a>
            </p>
          </div>
        
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            
            <h6 className="text-uppercase fw-bold">Products</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}}
                />
            <p>
              <a href="#!" className="text-white">Prediction Models</a>
            </p>
            <p>
              <a href="#!" className="text-white">Data Visualizations</a>
            </p>
            <p>
              <a href="#!" className="text-white">Web-Development</a>
            </p>
            <p>
              <a href="#!" className="text-white">Algorithms</a>
            </p>
          </div>
          
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

            <h6 className="text-uppercase fw-bold">Useful links</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}}
                />
            <p>
              <a href="#!" className="text-white">About</a>
            </p>
            <p>
              <a href="#!" className="text-white">Make a Donation</a>
            </p>
            <p>
              <a href="#!" className="text-white">Place an Order</a>
            </p>
            <p>
              <a href="#!" className="text-white">Help</a>
            </p>
          </div>
          
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
           
            <h6 className="text-uppercase fw-bold">Contact</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}}
                />
            <p><i className="fas fa-home mr-3"></i>Islamabad, F11/1 street 8, Pakistan</p>
            <p><i className="fas fa-envelope mr-3"></i> abuzar@gmail.com</p>
            <p><i className="fas fa-phone mr-3"></i> + 92 316 7815 023</p>
            <p><i className="fas fa-print mr-3"></i> + 92 305 6243 600</p>
          </div>
          
        </div>
    
      </div>
    </section>
   
    <div
         className="text-center p-3"
         style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
      © 2020 Copyright:
      <a className="text-white" href="https://mdbootstrap.com/"
         > Portifolio.com</a>
    </div>
    
  </footer>
        </>);
        }
}
 
export default Footer;