
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from 'react';
import Card from '../../components/jsx/Cards';
import '../css/home.css';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addProject } from "../../redux/ActionCreators";
import { fetchProjects } from "../../redux/ActionCreators";
import AddProject from "../../components/jsx/addProjectComponent";
import { Button,Modal} from 'react-bootstrap';
import {Form,InputGroup,FormControl} from 'react-bootstrap';
import { CloseButton } from 'react-bootstrap';
import { DropdownButton,Dropdown } from "react-bootstrap";

const mapStateToProps = state => {
    return {
      projects:state.projects
    }
}

const mapDispatchToProps = dispatch => 
({
    addProject: (userid,Title, Image, Text , Type , Duration) => dispatch(addProject(userid,Title, Image, Text , Type , Duration))
    ,fetchProjects: () => { dispatch(fetchProjects())}
});

class Home extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            HideForm:false,
            dropDown:"Select Type"
        }
    }
    handelDropDown = (e)=> {
        this.setState({ dropDown: e })
    }
    handleAddProjectForm() 
    {
            this.setState({ HideForm: !this.state.HideForm })
    }
    componentDidMount() 
    {
        this.props.fetchProjects();
    }
    render()
    { 
    const Data = this.props.projects.projects;
    console.log(Data);
    return (<>
    <div className="Main-Outer">
    <div className="container-fluid Main-Inner" style={{padding:"250px 0px 250px 0px"}}>
        <div className="container" >
            <div className="row">
                <div className="col-12 align-self-center">
                <p><h1>Hello, World.</h1>I am <strong> Abuzar </strong><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vehicula elementum nisl vel sollicitudin. Quisque pellentesque odio ac eros efficitur, vitae luctus arcu vulputate. Mauris eleifend finibus odio eu porttitor. In scelerisque congue mattis. Vestibulum varius magna quis felis commodo molestie. Integer tincidunt pharetra efficitur. Curabitur quis orci vehicula, gravida massa sed, porttitor nisi. Aliquam venenatis diam lorem, eget porta ligula ultricies sit amet. Nunc non eros lectus. Phasellus sit amet felis a nulla sollicitudin lacinia non ac lectus. In eleifend neque eget commodo tempus. Maecenas ut urna sollicitudin eros posuere tristique. In hac habitasse platea dictumst. Vestibulum in iaculis ligula. Nulla vel euismod sem.</p>
                </div>
            </div>
        </div>
    </div>
    </div>
    {/*Add Project Modal Form*/}
    <div className="container-fluid">
    <Modal className="Form-Modal" show={this.state.HideForm}>
            <Modal.Header style={{backgroundColor:"#1C2331",color:"grey",verticalAlign:"center"}} >
                <Modal.Title color="red">Upload New Project</Modal.Title>
                <CloseButton style={{color:"grey",backgroundColor:"#1C2331",textDecoration:"none"}} onClick={() => this.handleAddProjectForm()}/>
            </Modal.Header>
            <Modal.Body>
                    <form>
                        <div class="form-group row" style={{marginBottom:"10px"}}>
                            <div class="col-10">
                                <Form.Control type="text" placeholder="Project Title" />
                            </div>
                            <div class="col-1">
                                <input
                                    type="file"
                                    id="inputGroupFile01"
                                    aria-describedby="inputGroupFileAddon01"
                                    hidden/>
                                    <label className="custom-file-label btn" style={{border:"1px solid black"}} htmlFor="inputGroupFile01">
                                    <i class="fa fa-image" aria-hidden="true"></i>
                                </label>
                            </div>
                        </div>
                        <div class="form-group row" style={{marginBottom:"10px"}}>
                            <div class="col-7">
                                <label class="sr-only" for="exampleInputEmail3">Email address</label>
                                <Form.Control type="email" placeholder="Total Time Taken" />
                            </div>
                            <div class="col-2">
                            <DropdownButton id="dropdown-basic-button" variant="secondary" title={this.state.dropDown} onSelect={this.handelDropDown}>
                            <Dropdown.Item eventKey="Web-Based">WebDevelopment</Dropdown.Item>
                            <Dropdown.Item eventKey="Data-Science">Data-Science</Dropdown.Item>
                            <Dropdown.Item eventKey="Ideation Based">Ideation Based</Dropdown.Item>
                            <Dropdown.Item eventKey="Something else">Something else</Dropdown.Item>
                            </DropdownButton>
                            </div>
                        </div>
                        <div class="form-group row" style={{marginBottom:"10px"}}>
                            <div class="col-8">
                                <input
                                    type="file"
                                    id="attachImages"
                                    aria-describedby="attachImagesAddon01"
                                    multiple/>
                            </div>
                        </div>
                        <div class="form-group row" style={{marginBottom:"10px"}}>
                            <div class="col-12">
                                    <textarea
                                    className="form-control"
                                    id="exampleFormControlTextarea1"
                                    rows="5"
                                    placeholder="Write something..."
                                    />
                            </div>
                        </div>
                        <div class="form-row">
                            <button type="button" class="btn btn-secondary btn-sm ml-auto" style={{margin:"10px",boxShadow:"1px 1px 10px grey"}} onClick={() => {this.handleAddProjectForm();this.handelDropDown("Select Type")}}> Cancel </button>
                            <button type="submit" class="btn btn-primary btn-sm ml-1" style={{margin:"10px",boxShadow:"1px 1px 10px grey"}}> Save </button>
                        </div>
                    </form>
                </Modal.Body>
    </Modal>
    </div>
    {/*--------------------------------------------------------------*/}
    <div className="container-fluid" style={{backgroundColor:"transparent"}} style={{textAlign:"center",alignItems:"center"}}>
    <div className="row" style={{backgroundImage:"linear-gradient(to right,#0F2027,#203A43,#2C5364)"}}>
            <div className="col-12" style={{paddingTop:"30px",paddingBottom:"30px"}}>
            <Button variant="outline-primary" style={{borderRadius:"20%",padding:"30px",fontSize:"20px",color:"white",boxShadow:"5px 5px 20px black"}} onClick={() => this.handleAddProjectForm()}> <i style={{opacity:"90%"}} class="fas fa-upload"></i> New Project</Button>{' '}
            <Button variant="outline-primary" style={{borderRadius:"20%",padding:"30px",fontSize:"20px",color:"white",boxShadow:"5px 5px 20px black"}} onClick={() => this.handleAddProjectForm()}> <i style={{opacity:"90%"}} class="fas fa-camera"></i> New Feature</Button>{' '}
            </div>
    </div>
    <div className="row" style={{backgroundColor:"black",color:"white",textAlign:"center"}}>
        <div className="col-auto align-self-center" style={{color:"white",textAlign:"center"}}>
            <h1 style={{marginBottom:"30px",color:"white",textAlign:"center"}}> <i class="fa fa-certificate" aria-hidden="true"></i> Latest Featured Posts </h1>
        </div>
    </div>
    
    <div className="row " style={{backgroundColor:"grey",alignText:"center"}}>
        {
            Data.map((data,idx)=>
            {
                return(
                <div className="col-sm-10 offset-2 col-md-6 offset-md-0 col-lg-4 col-xl-3 col-xxl-2">
                <Card CardData={data}/>
                </div>);
            })
        }
    </div>
    <div className="row" style={{backgroundColor:"black",color:"white",textAlign:"center"}}>
        <div className="col-auto align-self-center" style={{color:"white",textAlign:"center"}}>
            <h1 style={{marginBottom:"30px",color:"white",textAlign:"center"}}> <i class="fa fa-certificate" aria-hidden="true"></i> Web-Development Projects</h1>
        </div>
    </div>
        <div className="row " style={{backgroundColor:"grey",alignText:"center"}}>
        {
            Data.map((data,idx)=>
            {
                if(data.type=="Web"){
                    return(
                    <div className="col-sm-10 offset-2 col-md-6 offset-md-0 col-lg-4 col-xl-3 col-xxl-2">
                    <Card CardData={data}/>
                    </div>);
                    }
                    else
                    {
                        return(
                            <div></div>
                        )
                    }
            })
        }
    </div>
    <div className="row" style={{backgroundColor:"black",color:"white",textAlign:"center"}}>
        <div className="col-auto align-self-center" style={{color:"white",textAlign:"center"}}>
            <h1 style={{marginBottom:"30px",color:"white",textAlign:"center"}}> <i class="fa fa-certificate" aria-hidden="true"></i> Data Science Projects</h1>
        </div>
    </div>
        <div className="row " style={{backgroundColor:"grey",alignText:"center"}}>
        {
            Data.map((data,idx)=>
            {
                if(data.type=="DataScience"){
                return(
                <div className="col-sm-10 offset-2 col-md-6 offset-md-0 col-lg-4 col-xl-3 col-xxl-2">
                <Card CardData={data}/>
                </div>);
                }
                else
                {
                    return(
                        <div></div>
                    )
                }
            })
        }
    </div>
    <div className="row" style={{backgroundColor:"black",color:"white",textAlign:"center"}}>
        <div className="col-auto align-self-center" style={{color:"white",textAlign:"center"}}>
            <h1 style={{marginBottom:"30px",color:"white",textAlign:"center"}}> <i class="fa fa-certificate" aria-hidden="true"></i> Ideation Block</h1>
        </div>
    </div>
        <div className="row " style={{backgroundColor:"grey",alignText:"center"}}>
        {
            Data.map((data,idx)=>
            {
                return(
                <div className="col-sm-10 offset-2 col-md-6 offset-md-0 col-lg-4 col-xl-3 col-xxl-2">
                <Card CardData={data}/>
                </div>);
            })
        }
    </div>
    <div className="row" style={{backgroundColor:"grey"}}>
            <br />
    </div>
    </div>
    </>);
    }
};
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Home));