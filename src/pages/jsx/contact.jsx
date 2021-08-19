import React from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Pic from "../../images/myPic.jpg";
import background from '../../images/backgroundHeader.jpg';
import HeaderLogo from '../../images/logoHeader.png';
import '@fortawesome/fontawesome-free/css/all.min.css';
const Contact = ()=>{
    return (<>
    <div className="container-fluid" id="contactForm" style={{backgroundColor:"transparent"}}>
    <div className="row offset-1">
      <h1> Contact</h1>
    </div>
    <div className="row">
      <br />
      <hr/>
    </div>
    <div className="row">
      <br />
      <br />
    </div>
    <div className="row">
      <div className="col-auto align-self-center d-none d-sm-block" style={{height:"400px",width: "400px"}}>
      <img class="img-thumbnail align-self-center" style={{height:"345px",width: "325px"}} src={Pic} alt="Uthappizza"/>
      </div>
      <div className="col-md-4 order-md-0 col-12 align-self-center">
          <h1>Contact Us</h1><p>If you want to contact abuzar then write message and abuzar will contact you soon via email,Just write down your details and inform me about your contact and tell me the reason so i could adjust my time to make contact with you</p>
      </div>
      <div className="d-md-block col-12 order-1 align-self-center">
          <br/>
      </div>
    <div className="card ml-auto" style={{width: "40rem"}}>
            <div className="card-header" style={{backgroundColor:"grey",textAlign:"center"}}>
                <h4>Write your message</h4>
            </div>
                <div className="card-body" style={{backgroundColor:"brown"}}>
                <form action="/contact">
  <div className="form-group row">
      <div className="col-6">
    <input type="text" style={{borderRadius:"25px"}} className="form-control" placeholder="First Name" id="email" />
    </div>
    <div className="col-6">
    <input type="text" style={{borderRadius:"25px"}} className="form-control" placeholder="Last Name" id="email" />
    </div>
  </div>

  <div className="form-group row">
      <br />
  </div>
  <div className="form-group row">
      <div className="col-6">
    <input type="email" style={{borderRadius:"25px"}} className="form-control" placeholder="Email Address" id="email" />
    </div>
    <div className="col-6">
    <input type="text" style={{borderRadius:"25px"}} className="form-control" placeholder="Mobile Number" id="email" />
    </div>
  </div>
  <div className="form-group row">
      <br />
  </div>

  <div className="form-group row">
    <div className="col-md-6 col-12">
    <input type="file" class="form-control" id="image" name="image"/>
    </div>
    <div className="col-md-6 col-12 align-self-center">
      <h6>Send attachment(Optional)</h6>
    </div>
  </div>

  <div className="form-group row">
      <br />
  </div>
  <div className="form-group row">
      <div className="col-12">
    <input type="text" className="form-control" style={{borderRadius:"25px",padding:"20px"}} placeholder="Write down your message" id="email" />
    </div>
  </div>
  <div className="form-group row">
      <br />
  </div>
  <div className="form-group row">
      <div className="col-5">
      
    </div>
    <div className="col-4">
      <button type="submit" style={{borderRadius:"25px",width:"110px",height:"40px",padding:"5px"}} className="btn btn-primary">Submit</button>
    </div>
  </div>
</form>
                
            </div>
    </div>
    </div>
    <div className="row">
      <br />
      <br />
    </div>
    <div className="row">
      <br />
      <hr/>
    </div>
    </div>
    
    </>);
};
export default Contact;