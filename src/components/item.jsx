import { Link } from "react-router-dom";

export default function Item({ idDrink, strAlcoholic, strDrink, strDrinkThumb, strGlass }) {
    return (
        <div className="w-100 shadow-2xl rounded-xl mb-5">

            <img src={strDrinkThumb} alt="" className="rounded-2xl"/>
            <div className="flex flex-col gap-5 text-2xl p-5">
                <h1>{strDrink}</h1>
                <span>{strGlass}</span>
                <p>{strAlcoholic}</p>
                <div  className="bg-cyan-300 rounded-2xl text-lg p-5 w-fit ">
                    <Link to={`/Detail/${idDrink}`}>
                        Detail
                    </Link>
                </div>
            </div>
        </div>
    )
}