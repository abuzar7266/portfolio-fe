
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from 'react';
import Card from '../../components/jsx/Cards';
import '../css/home.css';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addProject } from "../../redux/ActionCreators";
import { fetchProjects } from "../../redux/ActionCreators";



const mapStateToProps = state => {
    return {
      projects:state.projects
    }
}

const mapDispatchToProps = dispatch => ({
  
    addProject: (userid,Title, Image, Text , Type , Duration) => dispatch(addProject(userid,Title, Image, Text , Type , Duration))
    ,fetchProjects: () => { dispatch(fetchProjects())}
});

class Home extends Component
{
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
    <div className="container-fluid" style={{backgroundColor:"transparent"}} style={{textAlign:"center",alignItems:"center"}}>
    <div className="row">
            <br />
            <br />
    </div>
    <div className="row" style={{backgroundColor:"black",color:"white",textAlign:"center"}}>
        <div className="col-auto align-self-center" style={{color:"white",textAlign:"center"}}>
            <h1 style={{marginBottom:"30px",color:"white",textAlign:"center"}}> <i class="fa fa-certificate" aria-hidden="true"></i> Latest Featured Posts </h1>
        </div>
    </div>
    
    <div className="row " style={{alignText:"center"}}>
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
        <div className="row " style={{alignText:"center"}}>
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
        <div className="row " style={{alignText:"center"}}>
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
        <div className="row " style={{alignText:"center"}}>
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
    <div className="row">
            <br />
    </div>
    </div>
    </>);
    }
};
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Home));