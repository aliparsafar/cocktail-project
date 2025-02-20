import { useParams } from "react-router-dom"
import Item from "./item"
import DetailContent from "./DetailContent"

export default function Detail({items}){
    console.log(items);
    
    const{id}= useParams()
    return(
        <div>
            {
                items.map(item=>item.idDrink===id && <DetailContent key={item.idDrink} {...item} />)
            }
        </div>
    )
}