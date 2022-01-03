import ExploreList from "../exploreList/ExploreList";
import "./explore.scss";
import { useState,useEffect } from 'react'
import {
  singleExplore,
  multiExplore,
  apartmentsExplore,
  townhousesExplore
} from "../../data"

export default function Explore() {

  const [selected,setSelected] = useState("single");
  const [data,setData] = useState([]);
  const list = [
    {
      id:"single",
      title:"Single-Family"
    },
    {
      id:"multi",
      title:"Multi-Family"
    },
    {
      id:"apartments",
      title:"Apartments"
    },
    {
      id:"townhouses",
      title:"Townhouses"
    }
  ]

  useEffect(()=>{

    switch(selected){
      case "single":
        setData(singleExplore);
        break;
      case "multi":
        setData(multiExplore);
        break;
      case "apartments":
        setData(apartmentsExplore);
        break;
      case "townhouses":
        setData(townhousesExplore);
        break;
      default:
        setData(singleExplore);

    }
  },[selected])

  return (
    <div className="explore" id="explore">
      <h1>Explore Homes</h1>
      <ul>
        {list.map(item=>(
          <ExploreList title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id}/>
        ))}
      </ul>
      <div className="container">
        {data.map((d)=>(
          <div className="item">
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
        </div>
        ))} 
      </div>
    </div>
  );
}
