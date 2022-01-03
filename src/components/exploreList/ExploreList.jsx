import "./exploreList.scss"

export default function ExploreList({title,active,setSelected,id}) {
    return (
        <li className={active ? "exploreList active" : "exploreList"} onClick={()=>setSelected(id)}>
            {title}
        </li>
    )
}
