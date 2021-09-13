
import React, { Component } from 'react';
import Carousel from 'react-multi-carousel';
import { Link } from 'react-router-dom';
import '../css/styles.css';
import { responsive2 } from '../../components/jsx/CardSlider';
import { Container,Col,Row,Image } from 'react-bootstrap';
import axios from 'axios';
var url = "http://server-express-portfolio.herokuapp.com/";
class PostDetail extends Component
{
    constructor(props){
        super();
        this.state = {
            Data:{
                title:"",
                _id:"",
                imageFile:"",
                Text:"",
                files:[]
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
                <Carousel responsive={responsive2}>
                {
                    this.state.Data.files.map(val=>{
                        return (<div>
                            <Image style={{height:"300px",width:"400px"}} src={`${url}${val}`} fluid/>
                            </div>);
                    })
                }
                </Carousel>
                </Col>
            </Row>
            <Row>
                <br />
            </Row>
            <Row style={{overflowWrap: "break-word"}}>
                <Col >
                    <p style={{
                        textAlign:"left",marginLeft:"30px",marginRight:"30px",fontSize:"16px"}}>{this.state.Data.Text}</p>
                </Col>
            </Row>
        </Container>
        </>);
    }
};
export default PostDetail;