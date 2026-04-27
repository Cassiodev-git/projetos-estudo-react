//O componente precisa ser criado em uma função
import './PrimeiroComponent.css'
const PrimeiroComponente = () => {
    //aqui pode usar js 
    const nome = "guru"
    function ola() {
        alert(nome)
    }
    return (
        <nav className="teste">
            <div>
                <h1>Olá, {nome} como vai?</h1>
            </div>
            <ul>
                <li onClick={ola}>Home</li>
                <li>projetos</li>
            </ul>
        </nav>
    )
}
export default PrimeiroComponente