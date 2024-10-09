import React from 'react'

function App() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [tyc, setTyc] = React.useState()

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

          <input
            type="radio"
            name="tyc"
            id="si"
            checked={tyc === 'si'}
            onChange={(event) => {
                setTyc(event.target.value);
              }
            }
            value='si'
          />
          <label htmlFor="si">sí</label>

          <br />

          <input
            type="radio"
            name="tyc"
            id="no"
            checked={tyc === 'no'}
            onChange={(event) => {
                setTyc(event.target.value);
              }
            }
            value='no'
          />
          <label htmlFor="no">no</label>

        </fieldset>
      </form>
      <p>Buscate: {searchTerm}</p>
      <button onClick={() => setSearchTerm("patines")}>Busca 'Patines'</button>
    </>
  )
}

export default App
