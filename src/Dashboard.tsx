import { ContainerBoard } from './ContainerBoard';
import { ContainerForm } from './ContainerForm';
import { useState } from 'react';
import {type ContainerBoardType} from './ContainerBoard'
import type { ContainerType } from './Container';
import type { MaterialType } from './Material';

type DashboardProps = {
  container_data: ContainerBoardType
}

function Dashboard({ container_data }: DashboardProps) {
  const [containers, setContainers] = useState<ContainerBoardType>(container_data)

  function handleChange(e : any, containerId : number, materialId ?: number){
    let { name, value } = e.target;
    const newContainers = structuredClone(containers);
    let containerIndex = newContainers.containers.findIndex(container => container.id == containerId);
    let containerToChange = newContainers.containers[containerIndex]

    if (materialId !== undefined){
      const materials = containerToChange?.materials
      
      if((name === "amount" || name === "minimumStock") && (typeof value === "string")) {
          value = parseInt(value)
      }

      let materialIndex = materials.findIndex(material => material.id == materialId);
      materials[materialIndex][name] = value
    } else {
      containerToChange[name] = value
    }

    setContainers(newContainers);
  };

  
  function addContainer(){
    const newContainers = structuredClone(containers);

    newContainers.currentId += 1 

    const newContainer : ContainerType = {
      id: newContainers.currentId,
      currentMaterialId: -1,
      title: 'título',
      type: 'stock',
      info: 'info',
      materials: []
    }

    newContainers.containers.push(newContainer)

    setContainers(newContainers);
  }

  function addMaterial(containerId: number){
    const newContainers = structuredClone(containers);
    let containerIndex = newContainers.containers.findIndex(container => container.id == containerId);
    let containerToChange = newContainers.containers[containerIndex]

    containerToChange.currentMaterialId += 1

    const newMaterial : MaterialType = {
      id: containerToChange.currentMaterialId,
      title: 'titulo',
      amount: 0,
      minimumStock: containerToChange.type == 'stock' ? 1 : undefined,
      limitDate: new Date().toLocaleString('pt-BR')
    }

    containerToChange?.materials?.push(newMaterial)

    setContainers(newContainers);
  }

  function removeContainer(containerId: number) {
    const newContainers = structuredClone(containers);
    newContainers.containers = newContainers.containers.filter(container => container.id != containerId)
    setContainers(newContainers);
  }

  function removeMaterial(containerId: number, materialId: number) {
    const newContainers = structuredClone(containers);
    let containerIndex = newContainers.containers.findIndex(container => container.id == containerId);
    let containerToChange = newContainers.containers[containerIndex]
    containerToChange.materials = containerToChange.materials.filter(material => material.id != materialId)
    setContainers(newContainers);
  }

  return (
    <div>
      <ContainerBoard addContainer={addContainer} removeContainer={removeContainer} containerBoard={containers}></ContainerBoard>
      {containers.containers.map((container) => {
          const handleChangeClosure = (e : any, materialId ?: number) => handleChange(e, container.id, materialId)
          const addMaterialClosure = () => addMaterial(container.id)
          const removeMaterialClosure = (materialId : number) => removeMaterial(container.id, materialId)
          return <ContainerForm key={container.id} container={container} handleChange={handleChangeClosure} addMaterial={addMaterialClosure} removeMaterial={removeMaterialClosure}/>
      })}
    </div>
  );
}

export default Dashboard
