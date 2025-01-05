

const Album = async ()=>{
    const response=await fetch("https://jsonplaceholder.typicode.com/albums")
    if(!response.ok){
        throw new Error('fail')
    }
    const mucis=await response.json()
    return(
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols">
                {mucis.map((mucis:{id:number,title:string})=>(
                    <div key={mucis.id} className="bg-withe shadow-md rounded-lg p-4 trasition t...">
                        <h3 className="text-lg front-bold mb-2">{mucis.title}</h3>
                        <p className="text-gary-600">id:{mucis.id}</p>
                    </div>
                ))}
            </div>
        </>
    )
}
export default Album