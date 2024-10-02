import { useState } from 'react'

function App() {
  const [searchTerm, setSearchTerm] = React.useState('');

  return (
    <>
      <form>
        <input 
        type="text"
        name="searchTerm"
        id="searchTerm"
        onChange={(event) => {
          setSearchTerm(event.target.value)
        }}
        value={searchTerm}
        />
        <fieldset>
          <legend>Estás de acuerdo con los TyC?</legend>
          <input type="ratio" name="tyc" id="si" />
          <label htmlFor="si">sí</label>
          <br />
          <input type="ratio" name="tyc" id="no" />
          <label htmlFor="no">no</label>
        </fieldset>
      </form>
      <p>Buscate: {searchTerm}</p>
      <button onClick={() => setSearchTerm("patines")}>Busca 'Patines'</button>
    </>
  )
}

export default App
