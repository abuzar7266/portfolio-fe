const CardData=
        [
            {
                CardID : "Card-1",
                Header:"Header-1",
                Text : "Hi My name is abuzar",
                imgSrc: require('../images/background.jpg'),
                ShowLink: "#"
            },
            {
                CardID : "Card-2",
                Header:"Header-2",
                Text : "Hi My name is abuzar-1",
                imgSrc: require('../images/background.jpg'),
                ShowLink: "#"
            },
            {
                CardID : "Card-3",
                Header:"Header-3",
                Text : "Hi My name is abuzar-2",
                imgSrc: require('../images/background.jpg'),
                ShowLink: "#"
            },
            {
                CardID : "Card-4",
                Header:"Header-4",
                Text : "Hi My name is abuzar-3",
                imgSrc: require('../images/background.jpg'),
                ShowLink: "#"
            },
            {
                CardID : "Card-5",
                Header:"Header-5",
                Text : "Hi My name is abuzar-4",
                imgSrc: require('../images/background.jpg'),
                ShowLink: "#"
            },
            {
                CardID : "Card-6",
                Header:"Header-6",
                Text : "Hi My name is abuzar-5",
                imgSrc: require('../images/background.jpg'),
                ShowLink: "#"
            }
        ]
const Carousel =
        [
            {
                "status":"active",
                "key": "1",
                "imageUrl" : require("../images/myPic.jpg"),
                "imageAlt" : "ImageAlt-1",
                "HeaderText": "Header-1",
                "TextCarousel": "This is featured Text-1 of carousel"
            },
            {
                "status":" ",
                "key": "2",
                "imageUrl" : require("../images/backgroundHeader.jpg"),
                "imageAlt" : "ImageAlt-1",
                "HeaderText": "Header-1",
                "TextCarousel": "This is featured Text-1 of carousel"
            },
            {
                "status":" ",
                "key": "3",
                "imageUrl" : require("../images/background.jpg"),
                "imageAlt" : "ImageAlt-1",
                "HeaderText": "Header-1",
                "TextCarousel": "This is featured Text-1 of carousel"
            },
            {
                "status":" ",
                "key": "4",
                "imageUrl" : require("../images/background.jpg"),
                "imageAlt" : "ImageAlt-1",
                "HeaderText": "Header-1",
                "TextCarousel": "This is featured Text-1 of carousel"
            }
            
    ]
export const HOME = 
{
        AboutData:
        {
            name:"Abuzar",
            pageText:"Welcome to my Portifolio Website.I hope you find it interesting and make sure to check my latest projects on github in the link provided"
        },
        Cards:CardData,
        Carousels:Carousel
}