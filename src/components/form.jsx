import axios from "axios";
import { useState } from "react"

export default function Form({setItems}){
    const [input , setInput]=useState("")
    
     const formHandler = async (e)=>{
        e.preventDefault();
        
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`)
        const result = response.data;
        setItems(result.drinks)
     }   
    
    return(
        <form onSubmit={formHandler} className="m-auto flex justify-center gap-4 mt-10">
            <input type="text" onChange={(e)=>{setInput(e.target.value)}} value={input}  className="bg-blue-300 rounded-xl" />
            <button className="bg-blue-950 text-amber-50 rounded-xl w-30 h-10">search</button>
        </form>
    )
}