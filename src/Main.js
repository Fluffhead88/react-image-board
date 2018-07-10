import React, {Component} from 'react';
import './Main.css';

// ids, images, and captions for 10 pictures of Col Bruce and his zambi team

let imageBoard = [
  {
  id: 1,
  image: "http://ugly-things.com/wp-content/uploads/2017/05/Bruce-Hampton-guitar-e1495641503249.jpg",
  caption: "- Col. Bruce Hamption Retired -"
},{
  id: 2,
  image: "http://images.jambase.com/features/newswirephotos/Herring.jpg",
  caption: "- Jimmy Herring - the White Wizard -"
},{
  id: 3,
  image: "http://www.performanceimpressions.com/Jimmy_Herring_Band_2012/content/bin/images/large/Jeff_Sipe_opp5467.jpg",
  caption: "- Jeff Sipe - Apt. Q-258 -"
},{
  id: 4,
  image: "https://d3atagt0rnqk7k.cloudfront.net/wp-content/uploads/2017/04/07132924/Oteil-Burbridge-1280x800.jpg",
  caption: "- Oteil Burbridge - Oteil from Egypt -"
},{
  id: 5,
  image: "http://img2-ak.lst.fm/i/u/arO/96e3b0fe1ec642d092795a502978348f",
  caption: "- Derek Trucks -"
},{
  id: 6,
  image: "http://www.philzone.com/interviews/herring/2005/imgs/jimmy_herring-weintrob06-ricky.jpg",
  caption: "- Ricky Keller -"
},{
  id: 7,
  image: "https://i.ytimg.com/vi/kgXtwhaX4BI/maxresdefault.jpg",
  caption: "- The Reverend Jeff Mosier -"
},{
  id: 8,
  image: "https://i.ytimg.com/vi/Ek6yq3D9wbs/maxresdefault.jpg",
  caption: "- Matt Mundy Matt Mundy Matt Mundy -"
},{
  id: 9,
  image: "http://www.workingdrummer.net/wp-content/uploads/2016/09/DarrenStanley160123-2.jpg",
  caption: "- Darren Stanley -"
},{
  id: 10,
  image: "https://c1.staticflickr.com/6/5567/30370506672_b0f38fb65c_b.jpg",
  caption: "- Kevin Scott -"
  }
]

class Main extends Component{
  render(){
    // iterates over the array of objects including images and captions by key and puts them within the column
    let teamZambi = imageBoard.map(function(zambi){
      return(
      <div key={zambi.id} className="col-12 col-md pic">
      <img src={zambi.image}/>
    <p>{zambi.caption}</p>
      </div>
    )
  });
    return(
      <div className="container">
        {/* centers content and inserts the interated over objects into the hmtl*/}
        <div className="row no gutters justify-content-center">
            <main>
              {teamZambi}
            </main>
          </div>
      </div>
    );
  }
}

export default Main;
