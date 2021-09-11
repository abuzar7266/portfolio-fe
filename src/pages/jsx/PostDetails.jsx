
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addProject } from "../../redux/ActionCreators";
import { fetchProjects } from "../../redux/ActionCreators";
import Carousel from 'react-multi-carousel';
import { Link } from 'react-router-dom';
import '../css/styles.css';
import { responsive2 } from '../../components/jsx/CardSlider';
import { Container,Col,Row,Image } from 'react-bootstrap';
import axios from 'axios';
const authAxios  =axios.create({
    baseURL:"http://localhost:3001/",
    headers:{
        Authorization:`Bearer ${localStorage.getItem('token')}`
    }
});
class PostDetail extends Component
{
    constructor(props){
        super();
        this.state = {
            Data:{
                title:"",
                _id:"",
                imageFile:"",
                Text:""
            }
        }
    }
    componentDidMount = async () => 
    {
            const response = await axios.get(`project/${this.props.match.params.id}`);
            this.setState({Data:response.data});
    }
    render()
    {
        return(<>
        <Container fluid>
            <Row>
                <br />
            </Row>
            <Row>
                <Link to="/" style={{textAlign:"left",marginLeft:"55px",color:"black"}}><i className="fa fa-close"></i></Link>
            </Row>
            <Row>
                <br />
            </Row>
            <Row>
                <Col
                    xs={0}
                    sm={0}
                    md={3}
                    lg={3}
                >
                </Col>
                <Col
                    xs={12}
                    sm={12}
                    md={6}
                    lg={6}
                >
                <p style={{border:"1px solid black",color:"black",backgroundColor:"white",borderRadius:"0%",boxShadow:"10px 0px 10px black"}}>{this.state.Data.title}</p>
                </Col>
            </Row>
            <Row style={{backgroundColor:"white",padding:"20px"}}>
                <Col
                    xs={0}
                    sm={1}
                    md={1}
                    lg={3}
                >

                </Col>
                <Col
                    xs={12}
                    sm={10}
                    md={10}
                    lg={6}
                >
                
                </Col>
            </Row>
            <Row>
                <br />
            </Row>
            <Row>
                <Col>
                    {this.state.Data.Text}
                </Col>
            </Row>
        </Container>
        </>);
    }
};
export default PostDetail;