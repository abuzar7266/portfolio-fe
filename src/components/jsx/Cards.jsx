import React, { Component } from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../css/cards.css';
import { Modal} from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Form,Dropdown,DropdownButton} from 'react-bootstrap';
const authAxios  =axios.create({
  baseURL:"https://server-express-portfolio.herokuapp.com/",
  headers:{
      Authorization:`Bearer ${localStorage.getItem('token')}`
  }
});
class Cards extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
            showHide : false,
            HideForm:false,
            dropDown:"Select Type",
            files:[],
            file:null,
            attach:[],
            Time:"",
            Data:{
              Time:"",
              title:"",
              _id:"",
              imageFile:"",
              Text:"",
              files:[]
            },
            Time:"",
            Type:"",
            Title:"",
            Text:"",
            _id:""
        }
    }
    handleAddProjectForm = () => {
        this.setState({ HideForm: !this.state.HideForm })
    }
    handleTime = (e) =>{
      this.setState({Time:e.target.value});
    }
    handleTitle = (e) =>{
      this.setState({Title:e.target.value});
    }
    handleDropdown = (e) =>{
      this.setState({Type:e});
      if(this.state.Type=="Post" || this.state.Type=="Ideate")
      {
        this.setState({Time:" "});
      }
    }
    handleText = (e) =>{
      this.setState({Text:e.target.value});
    }
    handleModalShowHide() 
    {
          this.setState({ showHide: !this.state.showHide })
    }
    deleteApi = async (_id) =>{
      const resp = await authAxios.delete(`project/${_id}`);
        if(resp.status==200)
        {
            alert("Post has been successfully deleted");
        }
        else if(resp.status==401)
        {
            alert("You are not authorized to delete this post");
        }
        else
        {
            alert("Error occurred while deleting post");
        }
    }
    handleSubmit = async (e) =>{
      e.preventDefault();
        var Data = {
          TimeTaken : this.state.Time,
          Type:this.state.Type,
          Text:this.state.Text,
          title:this.state.Title
        }
        const response = await authAxios.put(`project/${this.state._id}`,Data);
        if(response.status==200)
        {
            alert("Post has been successfully updated");
        }
        else if(response.status==401)
        {
            alert("You are not authorized to update this post");
        }
        else
        {
            alert("Error occurred while updating post");
        }
        this.componentDidMount();
        this.handleAddProjectForm();
    }
    componentDidMount = async () => 
    {
              const response = await axios.get(`project/${this.props.CardData._id}`);
              this.setState({Data:response.data});
              this.setState({Time:response.data.TimeTaken,Type:response.data.Type,Title:response.data.title,Text:response.data.Text,_id:response.data._id});
    }
    render(){
        var CardData = this.state.Data;
        const imgUrl = ("http://server-express-portfolio.herokuapp.com/images/" + CardData.imageFile);
      return (<>
      <div>
      <div className="container-fluid" style={{alignContent:"center"}}>
        <Modal className="Form-Modal" show={this.state.HideForm} style={{maxWidth:"380px",textAlign:"center"}}>
                        <Card style={{boxShadow:"5px 5px 10px black",maxWidth:"400px"}}>
                          <Card.Header style={{backgroundColor:"#161C27",height:"45px",color:"white"}}>
                          <div className="row">
                          <div class="col-10">
                                    Update the Post
                          </div>
                          <div class="col-1">
                          <span style={{color:"grey",backgroundColor:"transparent",textDecoration:"none",cursor:"pointer",marginLeft:"15px"}} onClick={() => this.handleAddProjectForm()}><i class="far fa-times-circle"></i></span>
                            </div>
                          </div>
                          </Card.Header>
                          <Card.Body style={{backgroundColor:"#1C2331",color:"white"}}>
                              <Card.Text>
                          <form enctype="multipart/form-data" onSubmit={this.handleSubmit} method="POST">
                            <div class="form-group row" style={{marginBottom:"10px"}}>
                                <div class="col-12">
                                    <Form.Control type="text" id="title" placeholder={"Project Title"} onChange={this.handleTitle} value={this.state.Title} required/>
                                </div>
                            </div>
                            <div class="form-group row" style={{marginBottom:"10px"}}>
                                { this.state.Type=="Post" || this.state.Type=="Ideate" ? null : <div class="col-7">
                                    <Form.Control type="text" id="time" onChange={this.handleTime} value={this.state.Time} placeholder="Total Time Taken" />
                                </div> }
                                <div class="col-2">
                                <DropdownButton required id="type" variant="secondary" onSelect={this.handleDropdown} title={this.state.Type}>
                                <Dropdown.Item eventKey="Web">Development Project</Dropdown.Item>
                                <Dropdown.Item eventKey="Data">Data-Science Project</Dropdown.Item>
                                <Dropdown.Item eventKey="Ideate">Ideation and Theories</Dropdown.Item>
                                <Dropdown.Item eventKey="Post">Post on Website</Dropdown.Item>
                                </DropdownButton>
                                </div>
                            </div>
                            <div class="form-group row" style={{marginBottom:"10px"}}>
                                <div class="col-12">
                                        <textarea
                                        className="form-control"
                                        rows="5"
                                        id="text"
                                        onChange={this.handleText} value={this.state.Text}
                                        placeholder="Write something..."
                                        required
                                        />
                                </div>
                            </div>
                            <div class="form-row">
                                <button type="button" class="btn btn-secondary btn-sm ml-auto" style={{margin:"10px",boxShadow:"1px 1px 10px black"}} onClick={() => {this.handleAddProjectForm();this.handelDropDown("Select Type")}}> Cancel </button>
                                <button type="submit" class="btn btn-primary btn-sm ml-1" style={{margin:"10px",boxShadow:"1px 1px 10px black"}}> Update </button>
                            </div>
                        </form>
                              </Card.Text>
                          </Card.Body>
                      </Card>
        </Modal>
        </div>
          <div>
            <div className="card card-outer" >
              <Link className="Link-Style-2" to={`/Post/${CardData._id}`}>
                <img className="card-img-top card-img" src={imgUrl} alt={CardData.title}/>
                <div className="card-body">
                <div id={CardData._id}>
                <h5 className="card-title head-flow" style={{fontSize:"14px",height:"49px"}}>{CardData.title}</h5>
                  <p className="card-text text-flow" style={{fontSize:"11px",textAlign:"left",height:"100px"}}>{CardData.Text}</p>
                </div>
                </div>
              </Link>
              { this.props.Access==="public" && <div className="card-footer">
              <Link to="#" onClick={() => {this.handleAddProjectForm()}} className="btn btn-sm Post-Icons" style={{height:"65px",marginBottom:"10px"}}> <i className="fas fa-edit"> </i></Link>
              <Link to="#" onClick={()=>{ this.deleteApi(CardData._id);}} className="btn btn-sm Post-Icons" style={{height:"65px",marginBottom:"10px"}}> <i className="fas fa-times"> </i></Link>
              </div> }
    </div>
          </div>
          
      </div>
        </>)
    }
}
export default Cards;