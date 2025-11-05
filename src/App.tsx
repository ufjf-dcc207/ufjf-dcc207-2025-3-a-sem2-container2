import './App.css'
import container_json from '../container_data.json'
import stock_json from '../stock_material_data.json'
import transport_json from '../transport_material_data.json'
import { type ContainerBoardType, ContainerBoard } from './ContainerBoard';
import { type ContainerMaterialBoardType, ContainerMaterialBoard } from './ContainerMaterialsBoard';

const container_data = container_json as ContainerBoardType;
const stock_material_data = stock_json as ContainerMaterialBoardType;
const transport_material_data = transport_json as ContainerMaterialBoardType;

function App() {
  return (
    <div>
      <ContainerBoard containerBoard={container_data}></ContainerBoard>
      <ContainerMaterialBoard containerMaterialBoard={stock_material_data} tableHeaders={["Nome", "Quantidade", "Estoque mínimo", "Data limite de reestocagem"]}></ContainerMaterialBoard>
      <ContainerMaterialBoard containerMaterialBoard={transport_material_data} tableHeaders={["Nome", "Quantidade", "Previsão de entrega"]}></ContainerMaterialBoard>
    </div>
  );
}

export default App
