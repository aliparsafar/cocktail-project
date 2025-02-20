export function Newsletter(){
    return(
        <div className="flex flex-col justify-center items-center mt-72 shadow-xl w-200 m-auto rounded-2xl ">
            <h1 className="text-3xl">Our Newsletter</h1>
            <form action="" className="flex flex-col">
                <label htmlFor="">Name :</label>
                <input type="text" className="p-1 bg-blue-200 w-2xl rounded-xl "/>
                <label htmlFor="">Last Name :</label>
                <input type="text" className="p-1 bg-blue-200 w-2xl rounded-xl"/>
                <label htmlFor="">Email :</label>
                <input type="email" className="p-1 bg-blue-200 w-2xl rounded-xl"/>
            </form>
            <button className="flex mt-10 bg-emerald-500 w-50 justify-center p-4 rounded-3xl mb-10">Submit</button>
        </div>
    )
}