import { useState } from "react"
//usestate é um hook que muda  é faz o componente rederizar novamente
const  UseState = () => {
    let num = 10
    const [numero, setNumero] = useState(30)
    return (
        <div>
            <h2>O Valor atual é {num}</h2>
            <h2>Valor modificado: {numero}</h2>
            <hr></hr>
            <button onClick={() => {setNumero(20)}}>Clica aqui</button>
        </div>
    )
}

export default UseState