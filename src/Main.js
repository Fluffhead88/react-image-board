import React, {Component} from 'react';
import './Main.css';

let imageBoard = [
  {
  id: 1,
  image: "https://www.thesoundpodcast.com/wp-content/uploads/2018/02/TSP_WEB_FEATURE_948x557_col.brucehampton_ret-1.png",
  caption: "Col Bruce Hamption Retired"
},{
  id: 2,
  image: "https://thumbs.imagekind.com/3936454_650/Jimmy-Herring_art.jpg?v=1516696175",
  caption: "Jimmy Herring; the White Wizard"
},{
  id: 3,
  image: "http://www.performanceimpressions.com/Jimmy_Herring_Band_2012/content/bin/images/large/Jeff_Sipe_opp5467.jpg",
  caption: "Jeff Sipe; Apt. Q-258"
},{
  id: 4,
  image: "https://d3atagt0rnqk7k.cloudfront.net/wp-content/uploads/2017/04/07132924/Oteil-Burbridge-1280x800.jpg",
  caption: "Oteil Burbridge; Oteil from Egypt"
},{
  id: 5,
  image: "http://img2-ak.lst.fm/i/u/arO/96e3b0fe1ec642d092795a502978348f",
  caption: "Derek Trucks"
},{
  id: 6,
  image: "http://www.philzone.com/interviews/herring/2005/imgs/jimmy_herring-weintrob06-ricky.jpg",
  caption: "Ricky Keller"
},{
  id: 7,
  image: "https://i.ytimg.com/vi/kgXtwhaX4BI/maxresdefault.jpg",
  caption: "The Reverend Jeff Mosier"
},{
  id: 8,
  image: "http://www.performanceimpressions.com/Jimmy_Herring_Band_2012/content/bin/images/large/Jeff_Sipe_opp5467.jpg",
  caption: "Jeff Sipe; Apt. Q-258"
},{
  id: 9,
  image: "http://www.performanceimpressions.com/Jimmy_Herring_Band_2012/content/bin/images/large/Jeff_Sipe_opp5467.jpg",
  caption: "Jeff Sipe; Apt. Q-258"
},{
  id: 10,
  image: "http://www.performanceimpressions.com/Jimmy_Herring_Band_2012/content/bin/images/large/Jeff_Sipe_opp5467.jpg",
  caption: "Jeff Sipe; Apt. Q-258"
  }
]

class Main extends Component {
  render(){
    let images = imageBoard.map(function(image){
      return(
      <div key={imageBoard.id} className="col-12 col-md pic">
      <img src={imageBoard.image}/>
      <p>{imageBoard.caption}</p>
      </div>
    )
  });
    return(
      <div className="container">
        <div className="row">
            <main>
            {images}
            </main>
          </div>
      </div>
    );
  }
}

export default Main;
