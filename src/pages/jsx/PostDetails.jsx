
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
const mapStateToProps = state => {
    return {
      projects:state.projects
    }
}

const mapDispatchToProps = dispatch => 
({
    addProject: (Pid,title, Image, files , Text , Type , Duration) => dispatch(addProject(Pid,title, Image,files, Text , Type , Duration))
    ,fetchProjects: () => { dispatch(fetchProjects())}
});
class PostDetail extends Component
{
    constructor(props){
        super(props);
    }
    componentDidMount() 
    {
            this.props.fetchProjects();
    }
    render()
    {
            const Data = this.props.projects.projects;
            const Post = Data.filter((el)=>{
                return (el.PId===this.props.match.params.id);
            })
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
                <p style={{border:"1px solid black",color:"black",backgroundColor:"white",borderRadius:"0%",boxShadow:"10px 0px 10px black"}}>{Post[0].title}</p>
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
                        <div>
                                <Image style={{height:"370px"}} className="img-thumbnail bg-dark" src={Post[0].image.default} fluid/>
                        </div>
                    {
                        Post[0].files.map((data,idx)=>
                        {
                            return (<div>
                                <Image style={{height:"370px"}} className="img-thumbnail bg-dark" src={data.default} fluid/>
                            </div>);
                        })
                    }
                </Carousel>
                </Col>
            </Row>
            <Row>
                <br />
            </Row>
            <Row>
                <Col>
                    <p>{Post[0].text}</p>
                </Col>
            </Row>
        </Container>
        </>);
    }
};
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(PostDetail));