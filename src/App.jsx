import { useEffect, useState } from "react";
import axios from 'axios'

function App(){

    const [arr,setArr] = useState(null)

    useEffect(()=>{
       async function getData(){
            const res = await  axios('https://jsonplaceholder.typicode.com/users');
            console.log(res.data);
            setArr(res.data)
            
        }
        getData()
        
    },[])
    return (
        <>
        <h1>Hello World</h1>

    {arr ? arr.map((item)=>{
                return <div key={item.id}>
                    <p>{item.name}</p>
                </div>
     }):
     <p>Loading...</p>
  }

        </>
    )
}

export default App;