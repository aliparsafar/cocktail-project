export default function DetailContent({idDrink, strDrinkThumb, strDrink, strCategory, strAlcoholic, strGlass, strIngredient1, strIngredient2, strIngredient3, strInstructions}){
    return(
        <div className="flex flex-row mt-10  shadow-2xl rounded-4xl">
           
            <img src={strDrinkThumb} alt="" className="w-3xl rounded-4xl"/>
            <div className="flex flex-col justify-center gap-5 ml-10 text-lg  ">
            <span>Name : {strDrink}</span>
            <span>Category : {strCategory}</span>
            <span>Info : {strAlcoholic}</span>
            <span>Glass :  {strGlass}</span>
            <span>Ingredients : {strIngredient1 } , {strIngredient2} , {strIngredient3}</span>
            <span className="w-2xl ">Instructions : {strInstructions}</span>
            </div>
        </div>
    )
}