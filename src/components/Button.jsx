function Button(props){
    return (
        <>
        <button style={{
            backgroundColor: props.color,
            color: 'white',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer'
        }}>{props.name}</button>
        </>
    )
}

export default Button;