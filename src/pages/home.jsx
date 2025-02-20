import axios from "axios";
import { useEffect, useState } from "react";
import Item from "../components/item";
import Form from "../components/form";

export default function Home({items, setItems}) {
    const getDataFromApi = async () => {
        try {
            const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
            const response = await axios.get(url);
            const result = response.data.drinks;
            setItems(result)


        } catch (error) {
            console.log(error);

        }
    }
    useEffect(() => {
        getDataFromApi()
    }, [])
    return (
        <div className="min-h-screen">
            <Form setItems={setItems}/>
          <div className="flex flex-wrap gap-5 px-50 py-20 w-full justify-center items-center">
            {
               items.map((item)=>{
                return <Item key={item.idDrink} {...item} />
               })

            }
            </div>
        </div>
    )

}



