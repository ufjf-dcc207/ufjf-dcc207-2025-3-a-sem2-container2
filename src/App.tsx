import './App.css'
import container_json from '../container_data.json'
import { type ContainerBoardType, ContainerBoard } from './ContainerBoard';
import { ContainerForm } from './ContainerForm';

const container_data = container_json as ContainerBoardType;

function App() {
  return (
    <div>
      <ContainerBoard containerBoard={container_data}></ContainerBoard>
      <ContainerForm container={container_data.containers[0]}></ContainerForm>
      <ContainerForm container={container_data.containers[1]}></ContainerForm>
    </div>
  );
}

export default App
