import { useState } from 'react'
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState('')
  const [item, setItem] = useState([])

  const setInput = e => {
    setInputValue(e.target.value)
  }

  const handleForm = (e) => {
    e.preventDefault()

    if (inputValue.trim() === '') return //Si el valor del input esta vacio no se ejecuta la funcion

    setItem([...item, inputValue]) // El spread operator sirve para no alterar el arreglo original, y le pasamos el nuevo valor su segundo parametros, que es inputValue

    // Limpia el input
    setInputValue('')
  }

  const eliminarItem = (indice) => {
    const nuevaLista = item.filter((_, index) => index !== indice) //El _ significa que no utilizaremos ese valor y no nos servira en un futuro, solo nos sirve el index
    setItem(nuevaLista)
  }

  return (
    <main>
      <section>
        <h1>Prueba técnica de React</h1>
        <h2>Añadir y eliminar elementos de una lista</h2>
        <form onSubmit={handleForm}>
          <label>
            Elemento a introducir:
            <input
              value={inputValue}
              required
              type="text"
              placeholder="Videojuegos 🎮"
              onChange={setInput}
            />
          </label>
          <button type='submit'>Agregar item</button>
        </form>
      </section>
      <aside>
        <p>lista de items</p>
        {
          item.length === 0 ?
            <strong>No hay elementos</strong>
            : <ul>
              {item.map((item, index) => (
                <li key={index}>
                  {item}

                  <button onClick={() => eliminarItem(index)}> 🗑 Eliminar</button>
                </li>
              ))}
            </ul>

        }
      </aside>
    </main>
  )
}

export default App