import { useRef, useState } from "react";

function App(){

    const InputValue = useRef()
    const [arr,setArr] = useState([])

    const FormValue = (e)=>{
        e.preventDefault()
        arr.push(InputValue.current.value)
        console.log(arr);
        setArr([...arr])
        



        InputValue.current.value = "";
        
    }
    return (
        <>
        <h1>hello Todo</h1>
        <form onSubmit={FormValue}>
            <input type="text" placeholder="Add a todo..." ref={InputValue} />
            <button type="submit">Add</button>
        </form>

        <div>
            {arr.map((item,index)=>{
                return <div key={index}>
                    <p>{item}</p>
                    <button>DELETE</button>
                    <button>EDIT</button>
                </div>
            })}
        </div>
        </>
    )
}

export default App;