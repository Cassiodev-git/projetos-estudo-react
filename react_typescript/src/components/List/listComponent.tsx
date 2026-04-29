import type { Option } from "../../types/option";
    type Props = {
        options: Option[];
        onRemove: (id: string) => void
    };
    //destructing
    const ListComponent = ({ options, onRemove }: Props) => {
    return (
        <div className="card">
        <h2>Opções</h2>
        <ul>
            {options.map((option) => (
            <li key={option.id}>
                {option.name}
                <button className="remove" onClick={() => onRemove(option.id)}>
                    X
                </button>
            </li>
            ))}
        </ul>
        </div>
    );
};

export default ListComponent;