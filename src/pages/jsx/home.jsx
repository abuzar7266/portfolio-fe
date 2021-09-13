
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from 'react';
import Post from '../../components/jsx/Cards';
import { Card } from "react-bootstrap";
import '../css/home.css';
import '../css/styles.css';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addProject } from "../../redux/ActionCreators";
import { fetchProjects } from "../../redux/ActionCreators";
import AddProject from "../../components/jsx/addProjectComponent";
import { Button,Modal} from 'react-bootstrap';
import {Form,InputGroup,FormControl} from 'react-bootstrap';
import { CloseButton } from 'react-bootstrap';
import { DropdownButton,Dropdown } from "react-bootstrap";
import { responsive } from "../../components/jsx/CardSlider";
import Carousel from "react-multi-carousel";
import axios from 'axios';
import { Link } from "react-router-dom";
import NavBar from '../../components/jsx/NavBar';
const mapStateToProps = state => {
    return {
      projects:state.projects
    }
}

const mapDispatchToProps = (dispatch) => 
({
    addProject: (Pid,Title, Image, Text , Type , Duration) => dispatch(addProject(Pid,Title, Image, Text , Type , Duration))
    ,fetchProjects: () => { dispatch(fetchProjects())},
});
const authAxios  =axios.create({
    baseURL:"http://server-express-portfolio.herokuapp.com/",
    headers:{
        Authorization:`Bearer ${localStorage.getItem('token')}`
    }
});
class Home extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            HideForm:false,
            dropDown:"Select Type",
            files:[],
            file:null,
            attach:[],
            Time:""
        }
    }
    handelDropDown = (e) => {
        this.setState({ dropDown: e });
        if(this.state.dropDown=="Post" || this.state.dropDown=="Ideate")
        {
            this.setState({Time:" "});
        }
    }
    handleAddProjectForm = () => {this.setState({ HideForm: !this.state.HideForm });}
    handleImage = (e) =>{ this.setState({file:e.target.files}); }
    handleAttach = (e) =>{ this.setState({attach:e.target.files}); }
    handleSubmit = async (e) =>{
        e.preventDefault();
        const body = new FormData();
        body.append('Type',this.state.dropDown);
        body.append('title',e.target.title.value);
        body.append('Text',e.target.Text.value);
        body.append('TimeTaken',this.state.Time);
        body.append('image',this.state.file[0]);
        var newData = new Array();
        for(let i=0;i<this.state.attach.length;i++)
        {
            newData[i] = this.state.attach[i];
        }
        console.log(newData);
        for(let i=0;i<this.state.attach.length;i++)
        {
            body.append(`attachments[${i}]`,newData[i])
        }
        const response = await authAxios.post('project',body);
        if(response.status==200)
        {
            alert("Post has been successfully uploaded");
        }
        else if(response.status==401)
        {
            alert("You are not authorized to upload any post");
        }
        else
        {
            alert("Error occurred while uploaded post");
        }
        this.handleAddProjectForm();
    }
    handleTime = (e) =>{
        this.setState({Time:e.target.TimeTaken});
    }
    componentWillMount = async () =>
    {
            this.props.fetchProjects();
    }
    componentDidMount = async () =>
    {
            this.props.fetchProjects();
    }
    componentDidUpdate = async () =>
    {
        setTimeout( ()=>{
            this.props.fetchProjects();
        },10000);
    }
    render()
    {
        var files = this.props.projects.projects;

    return (<>
    <div className="Main-style">
    { !(localStorage.getItem('token')) ? <NavBar reload = {this.componentWillMount} status="login"/>:  <NavBar reload = {this.componentWillMount} status="logout"/>}
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
    <div className="container-fluid" style={{alignContent:"center"}}>
    <Modal className="Form-Modal" show={this.state.HideForm} style={{maxWidth:"380px",textAlign:"center"}}>
                    <Card style={{boxShadow:"5px 5px 10px black",maxWidth:"400px"}}>
                       <Card.Header style={{backgroundColor:"#161C27",height:"45px",color:"white"}}>
                       <div className="row">
                       <div class="col-10">
                                Post a New Project
                       </div>
                       <div class="col-1">
                       <span style={{color:"grey",backgroundColor:"transparent",textDecoration:"none",cursor:"pointer",marginLeft:"15px"}} onClick={() => this.handleAddProjectForm()}><i class="far fa-times-circle"></i></span>
                        </div>
                       </div>
                       </Card.Header>
                       <Card.Body style={{backgroundColor:"#1C2331",color:"white"}}>
                           <Card.Text>
                           <form enctype="multipart/form-data" onSubmit={this.handleSubmit}>
                        <div class="form-group row" style={{marginBottom:"10px"}}>
                            <div class="col-12">
                                <Form.Control type="text" id="title" placeholder="Project Title" required/>
                            </div>
                            <div class="col-12">
                                <Form.Control
                                    type="file"
                                    aria-describedby="inputGroupFileAddon01"
                                    id="img"
                                    className="hidden"
                                    onChange={this.handleImage}
                                    hidden
                                />  
                                <div style={{marginTop:"3px",border:"1px solid #6C757D",marginBotton:"3px",backgroundColor:"#FFFF",borderRadius:"5px"}}>
                                <label for="img"><i style={{textDecoration:"none",fontSize:"23px",color:"black"}} className="fas fa-image"></i><span style={{color:"black",fontSize:"20px"}}> Choose Thumnail </span></label>
                                </div>
                            </div>
                        </div>
                        <div class="form-group row" style={{marginBottom:"10px"}}>
                            { (this.state.dropDown!=="Post" && this.state.dropDown!=="Ideate") ? <div class="col-7">
                                <label class="sr-only" for="exampleInputEmail3">Total Time Taken</label>
                                <Form.Control type="text" id="TimeTaken" value={this.state.Time} onChange={this.handleTime} placeholder="Total Time Taken" required />
                            </div> : null }
                            <div class="col-2">
                            <DropdownButton required id="Type" variant="secondary" title={this.state.dropDown} onSelect={this.handelDropDown}>
                            <Dropdown.Item eventKey="Web">Development Project</Dropdown.Item>
                            <Dropdown.Item eventKey="Data">Data-Science Project</Dropdown.Item>
                            <Dropdown.Item eventKey="Ideate">Ideation and Theories</Dropdown.Item>
                            <Dropdown.Item eventKey="Post">Post on Website</Dropdown.Item>
                            </DropdownButton>
                            </div>
                        </div>
                        <div class="form-group row" style={{marginBottom:"10px"}}>
                            <div class="col-12">
                                <input
                                    type="file"
                                    aria-describedby="attachImagesAddon01"
                                    id="imgF"
                                    style={{margin:"10px"}}
                                    onChange={this.handleAttach}
                                multiple
                                hidden/>
                                <div style={{marginTop:"3px",border:"1px solid #6C757D",marginBotton:"3px",backgroundColor:"#FFFF",borderRadius:"5px"}}>
                                <label for="imgF"><i style={{textDecoration:"none",fontSize:"23px",color:"black"}} className="fa fa-paperclip"></i><span style={{color:"black",fontSize:"20px"}}> Attachments </span></label>
                                </div>
                            </div>
                        </div>
                        <div class="form-group row" style={{marginBottom:"10px"}}>
                            <div class="col-12">
                                    <textarea
                                    className="form-control"
                                    rows="5"
                                    id="Text"
                                    placeholder="Write something..."
                                    required
                                    />
                            </div>
                        </div>
                        <div class="form-row">
                            <button type="button" class="btn btn-secondary btn-sm ml-auto" style={{margin:"10px",boxShadow:"1px 1px 10px black"}} onClick={() => {this.handleAddProjectForm();this.handelDropDown("Select Type")}}> Cancel </button>
                            <button type="submit" class="btn btn-primary btn-sm ml-1" style={{margin:"10px",boxShadow:"1px 1px 10px black"}}> Save </button>
                        </div>
                    </form>
                          </Card.Text>
                       </Card.Body>
                   </Card>
    </Modal>
    </div>
    {/*--------------------------------------------------------------*/}
    <div className="container-fluid" style={{backgroundColor:"transparent"}} style={{textAlign:"center",alignItems:"center"}}>
    <div className="row" style={{backgroundImage:"linear-gradient(to right,#0F2027,#203A43,#2C5364)"}}>
            { (localStorage.getItem('token')) && <div className="col-6" style={{paddingTop:"30px",paddingBottom:"30px"}}>
                                <Button variant="outline-primary" style={{borderRadius:"90px",padding:"20px",fontSize:"20px",color:"white",boxShadow:"5px 5px 20px black"}} onClick={() => this.handleAddProjectForm()}> <i style={{opacity:"90%"}} class="fas fa-file-upload"></i> Upload Post</Button>
            </div> }
    </div>
    { (files.filter(file => file.Type==="Post")).length!=0 ? <div className="row" style={{backgroundColor:"black",color:"white",textAlign:"center"}}>
        <div className="col-auto align-self-center" style={{color:"white",textAlign:"center"}}>
            <h1 style={{marginBottom:"30px",color:"white",textAlign:"center"}}> <i class="fa fa-certificate" aria-hidden="true"></i> Latest Featured Posts </h1>
        </div>
    </div>:null}
    
    <Carousel responsive={responsive}>
        {
            (files.filter(file => file.Type==="Post")).map((data,idx)=>
            {
                if((localStorage.getItem('token'))){
                    return(<div className="offset-1">
                    <Post key={data._id} Access="public" CardData={data}/>
                    </div>
                    );
                }
                else{
                    return(<div className="offset-1">
                    <Post key={data._id} Access="private" CardData={data}/>
                    </div>
                    );
                }
            })   
        }
    </Carousel>
    {(files.filter(file => file.Type==="Web")).length!=0 ?<div className="row" style={{backgroundColor:"black",color:"white",textAlign:"center"}}>
        <div className="col-auto align-self-center" style={{color:"white",textAlign:"center"}}>
            <h1 style={{marginBottom:"30px",color:"white",textAlign:"center"}}> <i class="fa fa-certificate" aria-hidden="true"></i> Web-Development Projects</h1>
        </div>
    </div>:null}
    <Carousel responsive={responsive}>
        {
            (files.filter(file => file.Type==="Web")).map((data,idx)=>
            {
                if((localStorage.getItem('token'))){
                    return(<div className="offset-1">
                    <Post key={data._id} Access="public" CardData={data}/>
                    </div>
                    );
                }
                else{
                    return(<div className="offset-1">
                    <Post key={data._id} Access="private" CardData={data}/>
                    </div>
                    );
                }
            })   
        }
    </Carousel>
    { (files.filter(file => file.Type==="Data")).length!=0 ?<div className="row" style={{backgroundColor:"black",color:"white",textAlign:"center"}}>
        <div className="col-auto align-self-center" style={{color:"white",textAlign:"center"}}>
            <h1 style={{marginBottom:"30px",color:"white",textAlign:"center"}}> <i class="fa fa-certificate" aria-hidden="true"></i> Data Science Projects</h1>
        </div>
    </div>:null }
    <Carousel responsive={responsive}>
        {
            (files.filter(file => file.Type==="Data")).map((data,idx)=>
            {
                if((localStorage.getItem('token'))){
                    return(<div className="offset-1">
                    <Post key={data._id} Access="public" CardData={data}/>
                    </div>
                    );
                }
                else{
                    return(<div className="offset-1">
                    <Post key={data._id} Access="private" CardData={data}/>
                    </div>
                    );
                }
            })   
        }
    </Carousel>
    { (files.filter(file => file.Type==="Ideate")).length!=0 ?<div className="row" style={{backgroundColor:"black",color:"white",textAlign:"center"}}>
        <div className="col-auto align-self-center" style={{color:"white",textAlign:"center"}}>
            <h1 style={{marginBottom:"30px",color:"white",textAlign:"center"}}> <i class="fa fa-certificate" aria-hidden="true"></i> Ideation Block</h1>
        </div>
    </div>:null}
    <Carousel responsive={responsive}>
        {
            (files.filter(file => file.Type==="Ideate")).map((data,idx)=>
            {
                if((localStorage.getItem('token'))){
                    return(<div className="offset-1">
                    <Post key={data._id} Access="public" CardData={data}/>
                    </div>
                    );
                }
                else{
                    return(<div className="offset-1">
                    <Post key={data._id} Access="private" CardData={data}/>
                    </div>
                    );
                }
            })   
        }
    </Carousel>
    <div className="row" style={{backgroundColor:"grey"}}>
            <br />
    </div>
    </div>
    </div>
    </>);
    }
};
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Home));