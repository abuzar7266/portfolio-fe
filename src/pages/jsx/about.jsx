import React, { Component } from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
const mapStateToProps = state => {
    return {
      Data:state.AboutData
    }
}

class About extends Component
{   
    render(){
    return (<>
    <h1>Soon will be available</h1>
    </>);
    }
};
export default withRouter(connect(mapStateToProps)(About));