import { useEffect } from "react";


function App(){

    useEffect(()=>{
        console.log('hello world');
        
    },[])
    return (
        <>
        <h1>Hello World</h1>

        </>
    )
}

export default App;