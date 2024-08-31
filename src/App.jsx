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

    const DeleteTodo = ()=>{
        console.log('deleteTodo');
    }
    const EditTodo = ()=>{
        console.log('editTodo');
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
                    <button onClick={()=> DeleteTodo(index)}>DELETE</button>
                    <button onClick={EditTodo}>EDIT</button>
                </div>
            })}
        </div>
        </>
    )
}

export default App;