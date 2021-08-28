import React, { Component } from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../css/cards.css';
class Card extends Component{
    render(){
        var {CardData} = this.props;
return (<>
<div className="card card-outer">
  <img className="card-img-top card-img" src={CardData.imgSrc.default} alt="Card image cap"/>
  <div className="card-body">
  <h5 className="card-title">{CardData.Header}</h5>
  <div id={CardData.CardID}>
  <p className="card-text">{CardData.Text}</p>
    </div>
      <a href={CardData.ShowLink} className="btn card-btn"> <i className="fas fa-eye mr-3"> </i> Show More</a>
  </div>
  </div>
        </>)
    }
}
export default Card;