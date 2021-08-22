import React, { Component } from "react";
import { Accordion, Card } from "react-bootstrap";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export class Accordion_Component extends Component {

    constructor(props)
    {
      super(props);
      this.state = {
          ID:props.ID,
          Header:props.title,
          Text:props.content,
      }
    }
    render() {
        return (
            <>
                <div>
                    <Accordion style={{borderRadius:"10px",border:"1px solid #1C2331",margin:"0px 0px 0px 0px"}}>
                        <Card>
                            <Accordion.Toggle style={{cursor:"pointer",borderRadius:"10px",backgroundColor:"#1C2331",color:"white"}} as={Card.Header} eventKey={this.state.ID}>
                                {this.state.Header}
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey={this.state.ID}>
                                <Card.Body>{this.state.Text}</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </div>
            </>
        );
    }
}

export default Accordion_Component;