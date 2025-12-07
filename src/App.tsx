import './App.css'
import container_json from '../container_data.json'
import { type ContainerBoardType } from './ContainerBoard';
import Dashboard from './Dashboard';

const containers = container_json as ContainerBoardType;

function App() {
  return (
    <Dashboard container_data={containers}></Dashboard>
  );
}

export default App
