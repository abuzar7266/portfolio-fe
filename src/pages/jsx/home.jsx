
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import background from '../../images/backgroundHeader.jpg';
import React, { Component } from 'react'
import Feature from '../../components/jsx/Featured';
import Card from '../../components/jsx/Cards';
import '../css/home.css';
class Home extends Component{
    render(){ 
        var CardData = 
        [
            {
                CardID : "Card-1",
                Header:"Header-1",
                Text : "Hi My name is abuzar",
                imgSrc: require('../../images/background.jpg'),
                ShowLink: "#"
            },
            {
                CardID : "Card-2",
                Header:"Header-2",
                Text : "Hi My name is abuzar-1",
                imgSrc: require('../../images/background.jpg'),
                ShowLink: "#"
            },
            {
                CardID : "Card-3",
                Header:"Header-3",
                Text : "Hi My name is abuzar-2",
                imgSrc: require('../../images/background.jpg'),
                ShowLink: "#"
            },
            {
                CardID : "Card-4",
                Header:"Header-4",
                Text : "Hi My name is abuzar-3",
                imgSrc: require('../../images/background.jpg'),
                ShowLink: "#"
            },
            {
                CardID : "Card-5",
                Header:"Header-5",
                Text : "Hi My name is abuzar-4",
                imgSrc: require('../../images/background.jpg'),
                ShowLink: "#"
            },
            {
                CardID : "Card-6",
                Header:"Header-6",
                Text : "Hi My name is abuzar-5",
                imgSrc: require('../../images/background.jpg'),
                ShowLink: "#"
            },
            {
                CardID : "Card-7",
                Header:"Header-7",
                Text : "Hi My name is abuzar-6",
                imgSrc: require('../../images/background.jpg'),
                ShowLink: "#"
            },
            {
                CardID : "Card-8",
                Header:"Header-8",
                Text : "Hi My name is abuzar-8",
                imgSrc: require('../../images/background.jpg'),
                ShowLink: "/about"
            }
        ];
        var FeatureInfo = 
        [
            {
                "status":"active",
                "key": "1",
                "imageUrl" : require("../../images/myPic.jpg"),
                "imageAlt" : "ImageAlt-1",
                "HeaderText": "Header-1",
                "TextCarousel": "This is featured Text-1 of carousel"
            },
            {
                "status":" ",
                "key": "2",
                "imageUrl" : require("../../images/backgroundHeader.jpg"),
                "imageAlt" : "ImageAlt-1",
                "HeaderText": "Header-1",
                "TextCarousel": "This is featured Text-1 of carousel"
            },
            {
                "status":" ",
                "key": "3",
                "imageUrl" : require("../../images/background.jpg"),
                "imageAlt" : "ImageAlt-1",
                "HeaderText": "Header-1",
                "TextCarousel": "This is featured Text-1 of carousel"
            },
            {
                "status":" ",
                "key": "4",
                "imageUrl" : require("../../images/background.jpg"),
                "imageAlt" : "ImageAlt-1",
                "HeaderText": "Header-1",
                "TextCarousel": "This is featured Text-1 of carousel"
            }
            
        ];
    return (<>
    <div className="Main-Outer">
    <div className="container-fluid Main-Inner" style={{padding:"250px 0px 250px 0px"}}>
        <div className="container" >
            <div className="row row-header">
                <div className="col-12 align-self-center" style={{ textAlign:"center" }}>
                    <h1>Hello, World.</h1>
                    <p>I am <strong>Abuzar</strong><br/>Welcome to my Portifolio Website.I hope you find itinteresting and make sure to<br/>check my latest projects on github in the link provided</p>
                </div>
            </div>
        </div>
    </div>
    </div>
    <div className="container-fluid" style={{backgroundColor:"white"}}>
    <div className="row">
            <br />
    </div>

        <div className="row offset-md-1" style={{alignText:"center"}}>
        {
            CardData.map((data,idx)=>
            {
                return(
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" style={{padding:"10px", alignText:"center"}}>
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
export default Home;