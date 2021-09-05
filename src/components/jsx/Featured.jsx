import React, { Component } from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle";
class Feature extends Component{
    constructor(props)
    {
        super(props);
        this.state = 
        {   
            
        }
    }
    render()
    {
        console.log(this.props);
        var {feature} = this.props;
        var {ID} = this.props;
        return (<>
        <div className="container">
        <div className="row row-content">
            <div className="col">
                <div id={ID} className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner" role="listbox">
                    {
                            feature.map((data,idx)=>{
                                console.log(data.status);
                                if(data.status=="active")
                                {
                                         return (
                                            <div className="carousel-item active"  key={data.key} style={{textAlign:"center"}}>
                                                  <img className="d-block mr-3 img-thumbnail align-self-center" src={data.imageUrl.default} alt={data.imageAlt} style={{minWidth: "400px",maxWidth: "400px",minHeight:"350px",maxHeight: "350px"}}/>
                                                  <div className="carousel-caption d-none d-md-block">
                                                  <h2 className="mt-0" style={{display:"block",backgroundColor:"red",marginTop:"0",marginBottom:"0",inlineHeight:"2"}}>{data.HeaderText}</h2>
                                                  <p className="d-none d-sm-block" style={{display:"block",backgroundColor:"black",marginTop:"0",marginBottom:"0",inlineHeight:"2"}}>{data.TextCarousel}</p>
                                                </div> 
                                            </div>

                                        )
                                }
                                else
                                {
                                    return (
                                        <div className="carousel-item"  key={data.key}>
                                              <img className="d-flex mr-3 img-thumbnail align-self-center" src={data.imageUrl.default} alt={data.imageAlt} style={{minWidth: "400px",maxWidth: "400px",minHeight:"350px",maxHeight: "350px"}}/>
                                              <div className="carousel-caption d-none d-md-block">
                                              <h2 className="mt-0" style={{display:"block",backgroundColor:"red",marginTop:"0",marginBottom:"0",inlineHeight:"2"}}>{data.HeaderText}</h2>
                                              <p className="d-none d-sm-block" style={{display:"block",backgroundColor:"black",marginTop:"0",marginBottom:"0",inlineHeight:"2"}}>{data.TextCarousel}</p>
                                            </div> 
                                        </div>
                                        
                                    )
                                }
                            })

                        }
                        <ol className="carousel-indicators">
                            {
                                feature.map((data,idx)=>{ if(data.status==="active"){return (<li data-target={"#"+ID} data-slide-to={data.key-1} className="active"></li>)} else { return (<li data-target={"#"+ID}  data-slide-to={data.key-1} className=""></li>)} })
                            }
                        </ol>
                    </div>
                    <a className="carousel-control-prev" href={"#"+ID}  role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </a>
                    <a className="carousel-control-next" href={"#"+ID}  role="button" data-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </a>
                </div>
            </div>
        </div>
        <div className="row">
            <br/><br/><br/>
        </div>
    </div>
        </>);
    }
}
export default Feature;