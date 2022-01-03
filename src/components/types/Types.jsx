import "./types.scss";
import { useState } from "react";

export default function Types() {

  const [currentSlide,setCurrentSlide] = useState(0);

  const data = [
    {
      id: "1",
      title: "Single-Family Home",
      desc: "A single-family home is a free-standing residential building. Single-family homes are designed to be used as a single-dwelling unit, with one owner, no shared walls, and its own land.",
      img: "assets/single_exterior.jpg"
    },
    {
      id: "2",
      title: "Multi-Family Home",
      desc: "A multifamily home is any residential property that contains more than one housing unit, such as a duplex, a townhome or an apartment complex.",
      img: "assets/multi_exterior.jpg"
    },
    {
      id: "3",
      title: "Apartment",
      desc: "It usually refers to rooms together, like when you get a suite at a fancy hotel. It can also be a set of furniture or a musical composition. In housing terms, a suite is an apartment made up of connected rooms.",
      img: "assets/apt_exterior.jpg"
    },
    {
      id: "4",
      title: "Townhouse",
      desc:"Townhouse is a style of multi-floor home that share one to two walls with adjacent properties but have their own entrances.",
      img: "assets/th_exterior.jpg"
    }
  ];

  const handleClick = (way)=>{
    way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) :
    setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="types" id="types">
      <div className="slider" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img src="assets/arrow.png" className="arrow left" alt="" onClick={()=>handleClick("left")}/>
      <img src="assets/arrow.png" className="arrow right" alt="" onClick={()=>handleClick("right")}/>
    </div>
  );
}