import { Link } from "react-router-dom";

export default function Item({idDrink, strDrink , strDrinkThumb , strGlass}){
return(
<div className="w-80 flex flex-col mt-24 ml-60">
    
    <img src={strDrinkThumb} alt="" />
    <h1>{strDrink}</h1>
    <span>{strGlass}</span>
    <p>{idDrink}</p>
    <Link to="/Detail">
    detail
    </Link>
</div>
)
}