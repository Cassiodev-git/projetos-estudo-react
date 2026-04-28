import { useState } from "react"
import type { Option } from "./types/option"
function App() {
  //tipa o useState, como string
  const [inputValue, setInputValue] = useState<string>('')
  //tipa o useState, como array de string
  const [options, setOption] = useState<Option[]>([])
  const [select, setSelect] = useState<Option | null>(null)
  const handleAdd = () => {
    if(!inputValue.trim()) return
      const newOption = {
        id: crypto.randomUUID(),
        name: inputValue
      }
      setOption([...options, newOption])
      setInputValue('')
  }
  const randomOption = () =>{
    if(options.length === 0) return 
    const randomIndex = Math.floor(Math.random() * options.length)
    setSelect(options[randomIndex])
  }
  return (
    <div className="container">
      <h1>Decisor Rápido</h1>

      <div className="card">
        <input type="text"  value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Digite uma opção..." />
        <button onClick={handleAdd}>Adicionar</button>
      </div>

      <div className="card">
        <h2>Opções</h2>
        <ul>
          {options.map((option) => (
            <li key={option.id}>
              {option.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="card">
        <button className="decide" onClick={randomOption}>Decidir por mim 🎲</button>
        {select && <p>{select.name}</p>}
      </div>
    </div>
  )
}

export default App
