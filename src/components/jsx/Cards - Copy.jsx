import React, { Component } from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import image from '../../images/background.jpg';
import '@fortawesome/fontawesome-free/css/all.min.css';
class Card extends Component{
    render(){
        var {CardData} = this.props;
return (<>
<div className="card" style={{width: "18rem",borderRadius:"30px",border: "1px solid #000",borderStyle: "outset"}}>
  <img className="card-img-top" src={CardData.imgSrc.default} style={{border: "1px solid #000",borderRadius:"30px",minWidth: "285px",maxWidth: "285px",minHeight:"250px",maxHeight: "250px"}} alt="Card image cap"/>
  <div className="card-body">
  <h5 className="card-title">{CardData.Header}</h5>
  <div id={CardData.CardID}>
  <p className="card-text">{CardData.Text}</p>
    </div>
  <a href={CardData.ShowLink} className="btn btn-primary"> <i className="fas fa-eye mr-3"> </i> Show More</a>
  </div>
</div>
        </>)
    }
}
export default Card;