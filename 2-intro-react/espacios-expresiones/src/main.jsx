import { StrictMode } from 'react'
// import React from 'react'
import { createRoot } from 'react-dom/client'

const username = 'Pedro'

// const element = (
//   <h1>Hola {username} {username} Strig de texto!</h1>
// )

const shoppingList = ['manzanas', 'platanos', 'melón', 'mango', 'sandía']
//Esto es JS (afuera de los elementos)


// const element = (//JSX, dentro de los paréntesis
//   <p>No. de {/* Hola! */} cosas por comprar: {shoppingList.length}</p>
// )

// const mi_id = 'input-texto'

// const element = (
//   <input id ={mi_id} required={true} type='text'>
//   </input>
// )

// const element = React.createElement(
//   'h1',
//   {}, // class, id, href ...
//   `Hola `,
//   username,
//   username,
//   'String de texto',
// )

/*Agregar estilos en línea*/

// const pStyles = {
//   backgroundColor: 'goldenrod',
//   fontSize: '2rem',
//   fontFamily: 'sans-serif',
//   textAlign: 'center'
// }

// const element = (
//     <p
//       style={pStyles}>
//       No. de cosas por comprar: {shoppingList.length}
//     </p>
//   )
const element = (
    <p
      style={{
        backgroundColor: 'goldenrod',
        fontSize: '2rem',
        fontFamily: 'sans-serif',
        textAlign: 'center',
      }}>
      No. de cosas por comprar: {shoppingList.length}
    </p>
  )



createRoot(document.getElementById('root')).render(
  element
)
