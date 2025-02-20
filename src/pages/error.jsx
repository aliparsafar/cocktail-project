export default function Error(){
    return(
        <div className="flex flex-col justify-center items-center mt-20 gap-5">
            <img src="./src/assets/404.svg" alt="" className="w-150"/>
            <h6 className="text-4xl">Ohh!</h6>
            <p>We can't seem to find page you are looking for.</p>
            <a href="" className="text-cyan-300 text-2xl">Back Home</a>
        </div>
    )
}