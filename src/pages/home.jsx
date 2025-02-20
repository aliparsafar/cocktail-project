import axios from "axios";
import { useEffect, useState } from "react";
import Item from "../components/item";
import Form from "../components/form";
import Notfound from "../components/notfound";
import Loading from "../components/loading";
import Anerror from "../components/anerror";

export default function Home({items, setItems, isLoading, setIsLoading}) {
    const [isError , setIsError]= useState(false);
   
    useEffect(() => {
        
    }, [])
    return (
        <>
        <div className="min-h-screen">
            <Form setItems={setItems} isLoading={isLoading} setIsLoading={setIsLoading} setIsError={setIsError} />
            {
                isError && <Anerror />
            }
            {
                !items ? (
                    isLoading ? (<Loading/>) : (<Notfound/>)
                ) : (
                    <div className="flex flex-wrap gap-5 px-50 py-20 w-full justify-center items-center">
                    {
                       items.map((item)=>{
                        return <Item key={item.idDrink} {...item} />
                       })
        
                    }
                    </div>
                )
            }
        </div>
         
        </>
    )

}



