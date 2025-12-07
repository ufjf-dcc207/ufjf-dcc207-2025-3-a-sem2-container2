import { ContainerBoard } from './ContainerBoard';
import { ContainerForm } from './ContainerForm';
import { useState } from 'react';
import {type ContainerBoardType} from './ContainerBoard'


type DashboardProps = {
  container_data: ContainerBoardType
}


function Dashboard({ container_data }: DashboardProps) {
  const [containers, setContainers] = useState<ContainerBoardType>(container_data) 

  function handleChange(e : any, containerId : number, materialId ?: number){
    const { name, value } = e.target;
    const newContainers = structuredClone(containers);
    let containerIndex = newContainers.containers.findIndex(container => container.id == containerId);
    let containerToChange = newContainers.containers[containerIndex]

    if (materialId !== undefined){
      containerToChange.materials[materialId][name] = value
    } else {
      containerToChange[name] = value;
    }

    setContainers(newContainers);
  };

  return (
    <div>
      <ContainerBoard containerBoard={containers}></ContainerBoard>
      {containers.containers.map((container) => {
          const handleChangeClosure = (e : any, materialId ?: number) => handleChange(e, container.id, materialId)
          return <ContainerForm key={container.id} container={container} handleChange={handleChangeClosure}/>
      })}
    </div>
  );
}

export default Dashboard
