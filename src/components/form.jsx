import axios from "axios";
import { useState } from "react"

export default function Form({setItems, isLoading, setIsLoading , setIsError}){
    const [input , setInput]=useState("")
    
     const formHandler = async (e)=>{
        setIsLoading(true);
        setItems(null);
        e.preventDefault();
        try{
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`)
        setIsLoading(false)
        const result = response.data;
        setItems(result.drinks)
        setIsError(false);
    }catch (error){
        setIsLoading(false)
        setItems([])
        setIsError(true)
    }
     }   
    
    return(
        <form onSubmit={formHandler} className="w-3xl m-auto flex justify-center  mt-10 shadow-xl rounded-2xl p-5">
            <input type="text" onChange={(e)=>{setInput(e.target.value)}} value={input}  className="bg-blue-300 rounded-2xl w-100  " placeholder="Click Here" />
            <button className="bg-blue-950 text-amber-50  w-30 h-10 rounded-2xl ">Search</button>
        </form>
    )
}