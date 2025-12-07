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

  return (
    <div>
      <button onClick={changeTitle}>teste</button>
      <ContainerBoard containerBoard={containers}></ContainerBoard>
      {container_data.containers.map((container) => {
          return <ContainerForm key={container.title} container={container}/>
      })}
    </div>
  );
}

export default Dashboard
