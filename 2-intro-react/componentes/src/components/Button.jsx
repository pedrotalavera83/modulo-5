import React from 'react'

// function Button({contenido}) {
//     return (
//         <button>{contenido}</button>
//     )
// }

function Button({ children }) {
    return (
        <button
        style={{
            backgroundColor: 'blue',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold',
        }}
        
        >{ children }</button>
    )
}


export default Button