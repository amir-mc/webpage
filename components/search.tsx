import Form from 'next/form'
import Resetform from './searchreset';
import { Search } from "lucide-react";
const SearchFrom=({query}:{query?:string})=>{


    return(

        <Form action="/" scroll={false} className='search-form'>
            <input
            name="query"
            defaultValue={query}
            className='search-input'
            placeholder='Lookong for Something ?'
            >
            
            </input>
            <div className='flex gap-2'>
                 {
                    query && <Resetform/>
                    
                 }
                  <button type='submit' className='btn-search '>
                 <Search/>
            </button>
            </div>
           
    </Form>

    )
}
export default SearchFrom  