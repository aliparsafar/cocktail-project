import axios from "axios";
import { useEffect, useState } from "react";
import Item from "../components/item";
import Form from "../components/form";

export default function Home() {
    const [items, setItems] = useState([])
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
        <div>
            <Form setItems={setItems}/>
          <div className="flex flex-wrap gap-10">
            {
               items.map((item)=>{
                return <Item key={item.idDrink} {...item} />
               })

            }
            </div>
        </div>
    )

}



