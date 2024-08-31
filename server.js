const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const {sentImageData,Data} = require('./model/staticFiles');


const Data1 = [
    {
      id:1,      
      destTitle:"Bora Bora",
      location:"New Zealand",
      grade:"CULTURE RELAX",
      fees:"$700",
      description:"The epitome of romance, Bora Bora is one of the best travel destination in the world. This place is known for it's luxurious stays and adventurous activities."
    },
    {
      id:2,
      
      destTitle:"Machu Picchu",
      location:"Peru",
      grade:"CULTURE RELAX",
      fees:"$600",
      description:"Huayna Picchu is a mountain in peru, rising over Machu Picchu, the so-called Lost City of Incas. This place is popular amoung tourists as the sunrise from the sun Gate is simply spectacular."
    },
    {
      id:3,
      
      destTitle:"Great Barrier Reef",
      location:"Australia",
      grade:"CULTURE RELAX",
      fees:"$700",
      description:"One of the most remarkable Australian natural gifts is the great Barrier Reef. The hallmark of this place is 'lavish' and 'beauty'. Always interesting to be in this place."
    },
    {
      id:4,
      
      destTitle:"Coppadocia",
      location:"Turkey",
      grade:"CULTURE RELAX",
      fees:"$800",
      description:"According to the wrord tourism ranking, 45 Million people visit turkey each year, and from that about 2 Million come to visit Cappadocia. This place is known for it;s luxurious stays and adventurous activities."
    },
    {
      id:5,
      
      destTitle:"Guanajuato",
      location:"Maxico",
      grade:"CULTURE RELAX",
      fees:"$1100",
      description:"A City in central Maxico, Guanajuato is known for it;s history of silver mining and colonial architecture. The houses in the city are very attractively painted with the most bright colors available. Always welcome."
    },
    {
      id:6,
      
      destTitle:"Cinque Terre",
      location:"Italy",
      grade:"CULTURE RELAX",
      fees:"$840",
      description:"The vibrant hues of the houses are it's benchmark and explain the beauty of this place. Also, if you are a foodie and love seafood, you will be exhilarated with the choice you are about to get here. Happy exploring great food!."
    },
    {
      id:7,
      
      destTitle:"Angkor Wat",
      location:"Cambodia",
      grade:"CULTURE RELAX",
      fees:"$790",
      description:"Angkor Wat represents the entire range of Khmer art from the 9th to the 15th century. This temple is considered the heart and soul of Cambodia. This place is known for it's luxurious stays and adventurous activities."
    },
    {
      id:8,
      
      destTitle:"Taj Mahal",
      location:"India",
      grade:"CULTURE RELAX",
      fees:"$900",
      description:"An immense mausoleum of white marble, build-in Agra by Mughal emperor Shah Jahan in memory of his wife Mumtaz, the monument is breathtakingly beautiful. This place is known for it's luxurious stays and adventurous activities."
    },
    {
      id:9,
      
      destTitle:"Bali Island",
      location:"Indonasia",
      grade:"CULTURE RELAX",
      fees:"$500",
      description:"Bali is an Indonasian island and one of the best holiday destinations in the Indonasian archipelago. Bali is known for it's volcanic mountains, history, art & culture, food, temples and beatiful sandy beaches."
    }
  ]

app.use(cors());  

app.get('/mostVisited',(req,res)=>{
    //console.log(Data);
    res.send({
        status:'Succes',
        Data:Data
    });
});
app.get('/images/:id',sentImageData);


app.listen(5000,()=>{
    console.log('server running on localhost 5000');
});