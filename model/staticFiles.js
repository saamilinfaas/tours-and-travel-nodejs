const path = require('path');


const img = "img.jpg";
const img2 = "img2.jpg";
const img3 = "pexels-francesco-ungaro-26700466.jpg";
const img4 = "pexels-francesco-ungaro-27047511.jpg";
const img5 = "pexels-janonovoa-16756544.jpg";
const img6 = "pexels-kammeran-gonzalez-keola-3137381-26570912.jpg";
const img7 = "pexels-mathias-dargnat-1141076318-26690031.jpg";
const img8 = "pexels-nico-marin-703142244-26045508.jpg";
const img9 = "pexels-adem-albayrak-383796555-19197428.jpg";



const Data = [
    {
      id:1,
      imgSrc:'http://localhost:5000/images/img.jpg' ,
      destTitle:"Bora Bora",
      location:"New Zealand",
      grade:"CULTURE RELAX",
      fees:"$700",
      description:"The epitome of romance, Bora Bora is one of the best travel destination in the world. This place is known for it's luxurious stays and adventurous activities."
    },
    {
      id:2,
      imgSrc:"http://localhost:5000/images/img2.jpg",
      destTitle:"Machu Picchu",
      location:"Peru",
      grade:"CULTURE RELAX",
      fees:"$600",
      description:"Huayna Picchu is a mountain in peru, rising over Machu Picchu, the so-called Lost City of Incas. This place is popular amoung tourists as the sunrise from the sun Gate is simply spectacular."
    },
    {
      id:3,
      imgSrc:"http://localhost:5000/images/pexels-francesco-ungaro-26700466.jpg",
      destTitle:"Great Barrier Reef",
      location:"Australia",
      grade:"CULTURE RELAX",
      fees:"$700",
      description:"One of the most remarkable Australian natural gifts is the great Barrier Reef. The hallmark of this place is 'lavish' and 'beauty'. Always interesting to be in this place."
    },
    {
      id:4,
      imgSrc:"http://localhost:5000/images/pexels-francesco-ungaro-27047511.jpg",
      destTitle:"Coppadocia",
      location:"Turkey",
      grade:"CULTURE RELAX",
      fees:"$800",
      description:"According to the wrord tourism ranking, 45 Million people visit turkey each year, and from that about 2 Million come to visit Cappadocia. This place is known for it;s luxurious stays and adventurous activities."
    },
    {
      id:5,
      imgSrc:"http://localhost:5000/images/pexels-janonovoa-16756544.jpg",
      destTitle:"Guanajuato",
      location:"Maxico",
      grade:"CULTURE RELAX",
      fees:"$1100",
      description:"A City in central Maxico, Guanajuato is known for it;s history of silver mining and colonial architecture. The houses in the city are very attractively painted with the most bright colors available. Always welcome."
    },
    {
      id:6,
      imgSrc:"http://localhost:5000/images/pexels-kammeran-gonzalez-keola-3137381-26570912.jpg",
      destTitle:"Cinque Terre",
      location:"Italy",
      grade:"CULTURE RELAX",
      fees:"$840",
      description:"The vibrant hues of the houses are it's benchmark and explain the beauty of this place. Also, if you are a foodie and love seafood, you will be exhilarated with the choice you are about to get here. Happy exploring great food!."
    },
    {
      id:7,
      imgSrc:"http://localhost:5000/images/pexels-mathias-dargnat-1141076318-26690031.jpg",
      destTitle:"Angkor Wat",
      location:"Cambodia",
      grade:"CULTURE RELAX",
      fees:"$790",
      description:"Angkor Wat represents the entire range of Khmer art from the 9th to the 15th century. This temple is considered the heart and soul of Cambodia. This place is known for it's luxurious stays and adventurous activities."
    },
    {
      id:8,
      imgSrc:"http://localhost:5000/images/pexels-nico-marin-703142244-26045508.jpg",
      destTitle:"Taj Mahal",
      location:"India",
      grade:"CULTURE RELAX",
      fees:"$900",
      description:"An immense mausoleum of white marble, build-in Agra by Mughal emperor Shah Jahan in memory of his wife Mumtaz, the monument is breathtakingly beautiful. This place is known for it's luxurious stays and adventurous activities."
    },
    {
      id:9,
      imgSrc:"http://localhost:5000/images/pexels-kammeran-gonzalez-keola-3137381-26570912.jpg",
      destTitle:"Bali Island",
      location:"Indonasia",
      grade:"CULTURE RELAX",
      fees:"$500",
      description:"Bali is an Indonasian island and one of the best holiday destinations in the Indonasian archipelago. Bali is known for it's volcanic mountains, history, art & culture, food, temples and beatiful sandy beaches."
    } 
  ];

const sentImageData = ((req,res,next)=>{
    //console.log(req.params.id);
    //console.log(path.join(__dirname));
    res.sendFile(path.join(__dirname,"images_videos","Assets",`${req.params.id}`));
    //res.sendFile(path.join(__dirname,"images_videos","Assets",`${id+".jpg"}`));    
    //next();
})  


  module.exports = {Data,sentImageData};