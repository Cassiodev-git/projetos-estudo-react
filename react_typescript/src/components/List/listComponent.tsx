import type { Option } from "../../types/option";
type Props = {
    options: Option[];
    };
    //destructing
    const ListComponent = ({ options }: Props) => {
    return (
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
    );
};

export default ListComponent;