import React from 'react'


// function Saludo(props)
// function Saludo( {firstName ='estudiante ',  lastName = 'listo', insta = 'Instagram'} ) {
//     // console.log(props)
//     return (
//         <div
//             style={{
//             fontSize: '1.5rem',
//             textAlign: 'center',
//             color: 'goldenrod',
//         }}
        
//         >Hola, {firstName} {lastName}!</div>
//     )
// }

// Operador 'Or / o'
//La pe3or opcion
//El operador or va a evaluar como falso todo lo que sea un valor folsy: 0, null, NaN, undefined, ''
// function Saludo( {firstName,  lastName, insta} ) {
//     // console.log(props)
//     return (
//         <div
//             style={{
//             fontSize: '1.5rem',
//             textAlign: 'center',
//             color: 'goldenrod',
//         }}
        
//         >Hola, {firstName || 'Estudiante'} {lastName || 'listo'}, tu cuenta es: {insta  || 'Instagram'}!</div>
//     )
// }

//operador nullish ?? va a evaluar como falsy unicamente null o undefined
function Saludo( {firstName,  lastName, insta} ) {
    // console.log(props)
    return (
        <div
            style={{
            fontSize: '1.5rem',
            textAlign: 'center',
            color: 'goldenrod',
        }}
        
        >Hola, {firstName ?? 'Estudiante'} {lastName ?? 'listo'}, tu cuenta es: {insta  ?? 'Instagram'}!</div>
    )
}


export default Saludo