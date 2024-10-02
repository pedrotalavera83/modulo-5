import React from 'react'
import Saludo from './components/Saludo.jsx'
import Button from './components/Button.jsx'

//rfce
function App() {
  return (
    <div>
      <h1>App</h1>
      <h2>App</h2>
      <hr/>
      <Saludo firstName ='Pedro' lastName = 'Talavera' insta = '@ppts'/>
      <Saludo firstName ='Pablo'  lastName = 'Segura' insta = '@pgu'/>
      <Saludo firstName ='Enrique' lastName = 'Sandoval' insta = '@essan'/>
      <Saludo/>
      <hr/>
      <Button>   
      Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor
      </Button>
      {/* <Button contenido = 'Botón-2' /> */}
      <Button>
        Botón-2
      </Button>
      <Button>
        Botón-3
      </Button>
    </div>
    
  )
}

export default App