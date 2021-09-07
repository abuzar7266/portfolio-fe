
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addProject } from "../../redux/ActionCreators";
import { fetchProjects } from "../../redux/ActionCreators";
import Carousel from 'react-multi-carousel';
import { Link } from 'react-router-dom';
import '../css/styles.css';
import { Container,Col,Row } from 'react-bootstrap';
const mapStateToProps = state => {
    return {
      projects:state.projects
    }
}

const mapDispatchToProps = dispatch => 
({
    addProject: (Pid,Title, Image, Text , Type , Duration) => dispatch(addProject(Pid,Title, Image, Text , Type , Duration))
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
                <Col
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                >
                <p>{Post[0].title}</p>
                </Col>
            </Row>
        </Container>
        </>);
    }
};
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(PostDetail));