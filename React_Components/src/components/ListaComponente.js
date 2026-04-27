const ListaComponente = () => {
    let frutas = [
        {id: 1, nome: "manga", preco: 12 },
        {id: 2, nome: "uva", preco: 23 },
        {id: 3, nome: "banana", preco: 45 },
        {id: 4,  nome: "pera", preco: 43 },
    ];
    return frutas.map(fruta => (
        <div>
        <ul key={fruta.id}>
            <li>{fruta.nome} custa {fruta.preco}</li>
        </ul>
        </div>
    ));
    };
export default ListaComponente;
