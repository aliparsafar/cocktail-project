export function Newsletter(){
    return(
        <div className="flex flex-col justify-center items-center mt-72">
            <h1 className="text-3xl">Our Newsletter</h1>
            <form action="" className="flex flex-col">
                <label htmlFor="">Name</label>
                <input type="text" className="bg-amber-300 w-2xl rounded-xl"/>
            </form>
            <form action="" className="flex flex-col">
                <label htmlFor="">Last Name</label>
                <input type="text" className="bg-amber-300 w-2xl rounded-xl"/>
            </form>
            <form action="" className="flex flex-col">
                <label htmlFor="">email</label>
                <input type="email" className="bg-amber-300 w-2xl rounded-xl"/>
            </form>
            <button className="flex mt-10">Submit</button>
        </div>
    )
}