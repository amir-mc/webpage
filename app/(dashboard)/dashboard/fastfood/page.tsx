
const Fastfood = async()=>{
  
    const response=await fetch('https://react-mini-projects-api.classbon.com/FastFood/list');
    if(!response.ok){
        throw new Error('RIDI')
    }
    const fast = await response.json()

    const respon=await fetch('http://localhost:3000/api/book');
    if(!respon.ok){ throw new Error('Ridi')
    }
        const bok =await respon.json()
    return(
        <>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols">
                {fast.map((fast:{id:number,name:string,price:number,imageUrl:string,title:string})=>(
                    <div key={fast.id} className="bg-withe shadow-md rounded-lg p-4 trasition t...">
                        <h3 className="text-lg front-bold mb-2">{fast.title}</h3>
                        <p className="text-gary-600">id:{fast.name}</p>
                        <img alt="img" src={fast.imageUrl}/>
                    </div>
                ))}
            </div>
            <div >
                {
                    bok.map((bok:{id:number,name:string})=>(
                        <div key={bok.id}>
                            {bok.name}
                        </div>
                    ))
                }
            </div>

        </>
    )
}
export default Fastfood
