import './App.css'
import container_json from '../container_data.json'
import material_json from '../material_data.json'
import { type ContainerBoardType, ContainerBoard } from './ContainerBoard';
import { type ContainerMaterialBoardType, ContainerMaterialBoard } from './ContainerMaterialsBoard';

const container_data = container_json as ContainerBoardType;
const material_data = material_json as ContainerMaterialBoardType;

function App() {
  return (
    <div>
      <ContainerBoard containerBoard={container_data}></ContainerBoard>
      <ContainerMaterialBoard containerMaterialBoard={material_data}></ContainerMaterialBoard>
    </div>
  );
}

export default App
