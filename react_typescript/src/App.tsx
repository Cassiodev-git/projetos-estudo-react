import { useState } from "react"
import type { Option } from "./types/option"
import ListComponent from "./components/List/listComponent"
function App() {
  //tipa o useState, como string
  const [inputValue, setInputValue] = useState<string>('')
  //tipa o useState, como array de string
  const [options, setOption] = useState<Option[]>([])
  const [select, setSelect] = useState<Option | null>(null)
  //logica de salvar opção
  const handleAdd = () => {
    if(!inputValue.trim()) return
      const newOption: Option = {
        id: crypto.randomUUID(),
        name: inputValue
      }
      setOption([...options, newOption])
      setInputValue('')
  }
  //escolha aleatoria da opção
  const randomOption = () =>{
    if(!options.length) return 
    const randomIndex = Math.floor(Math.random() * options.length)
    setSelect(options[randomIndex])
  }
  const handleDelete = (id: string) => {
    setOption(options.filter(option => option.id !== id))
  }
  return (
    <div className="container">
      <h1>Decisor Rápido</h1>

      <div className="card">
        <input type="text"  value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Digite uma opção..." />
        <button onClick={handleAdd}>Adicionar</button>
      </div>
      <ListComponent options={options} onRemove={handleDelete}/>
      <div className="card">
        <button className="decide" onClick={randomOption}>Decidir por mim 🎲</button>
        {select && <p>{select.name}</p>}
      </div>
    </div>
  )
}

export default App
