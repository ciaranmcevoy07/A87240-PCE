import ListSensors from "./ListSensors";
import NewSensor from "./NewSensor";

export default function IndexSensor() {
    return (
        <div>
            <h1>Listagem Geral de Sensores</h1>
            Sou componente listagem
        <div>
            <ListSensors/>
            </div>
        <div>
        <NewSensor />
        </div>
        </div>
    )
}