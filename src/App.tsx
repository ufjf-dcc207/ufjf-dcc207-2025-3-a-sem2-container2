import './App.css'
import container_json from '../container_data.json'
import { type ContainerBoardType, ContainerBoard } from './ContainerBoard';
import { ContainerForm } from './ContainerForm';

const container_data = container_json as ContainerBoardType;

function App() {
  return (
    <div>
      <ContainerBoard containerBoard={container_data}></ContainerBoard>
      {container_data.containers.map((container) => {
          return <ContainerForm key={container.title} container={container}/>
      })}
    </div>
  );
}

export default App
