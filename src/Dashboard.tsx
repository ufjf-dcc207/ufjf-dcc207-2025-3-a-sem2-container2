import { ContainerBoard } from './ContainerBoard';
import { ContainerForm } from './ContainerForm';
import { useState } from 'react';
import {type ContainerBoardType} from './ContainerBoard'


type DashboardProps = {
  container_data: ContainerBoardType
}


function Dashboard({ container_data }: DashboardProps) {
  const [containers, setContainers] = useState<ContainerBoardType>(container_data) 

  function changeTitle() {
    const newContainers = structuredClone(containers);
    newContainers.title = "teste"
    setContainers(newContainers)
  }

  function handleChange(e : any, id : number, idMaterial = null){
    const { name, value } = e.target;
    let nameString = String(name)
    const newContainers = structuredClone(containers);
    let containerIndex = newContainers.containers.findIndex(container => container.id == id);
    newContainers.containers[containerIndex][nameString] = value;
    setContainers(newContainers);
  };

  return (
    <div>
      <button onClick={changeTitle}>teste</button>
      <ContainerBoard containerBoard={containers}></ContainerBoard>
      {container_data.containers.map((container) => {
          return <ContainerForm key={container.title} container={container} handleChange={handleChange}/>
      })}
    </div>
  );
}

export default Dashboard
