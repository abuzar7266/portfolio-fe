import React from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


const mapStateToProps = state => {
    return {
      Data:state.ContactData
    }
}


class Contact extends Component
{
  render()
  {
    return (<>
        <h1>Soon will be available</h1>
    </>);
  }
};

export default withRouter(connect(mapStateToProps)(Contact));