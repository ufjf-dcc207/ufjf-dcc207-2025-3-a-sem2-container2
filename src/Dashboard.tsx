import { ContainerBoard } from './ContainerBoard';
import { ContainerForm } from './ContainerForm';
import { useState } from 'react';
import {type ContainerBoardType} from './ContainerBoard'
import type { ContainerType } from './Container';
import type { MaterialType } from './Material';

type DashboardProps = {
  container_data: ContainerBoardType
}

type NavigationType = {
  currentContainerId?: number,
}

function Dashboard({ container_data }: DashboardProps) {
  const [containersBoard, setContainersBoard] = useState<ContainerBoardType>(container_data)
  const [navigation, setNavigation] = useState<NavigationType>({currentContainerId: undefined})

  function setCurrentContainer(containerId ?: number){
    const newNavigation = structuredClone(navigation);
    newNavigation.currentContainerId = containerId
    setNavigation(newNavigation)
  }

  function handleChange(e : any, containerId : number, materialId ?: number){
    let { name, value } = e.target;
    const newContainersBoard = structuredClone(containersBoard);
    let containerIndex = newContainersBoard.containers.findIndex(container => container.id == containerId);
    let containerToChange = newContainersBoard.containers[containerIndex]

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

    setContainersBoard(newContainersBoard);
  };
 
  function addContainer(){
    const newContainersBoard = structuredClone(containersBoard);

    newContainersBoard.currentId += 1 

    const newContainer : ContainerType = {
      id: newContainersBoard.currentId,
      currentMaterialId: -1,
      title: 'título',
      type: 'stock',
      info: 'info',
      materials: []
    }

    newContainersBoard.containers.push(newContainer)

    setContainersBoard(newContainersBoard);
  }

  function addMaterial(containerId: number){
    const newContainersBoard = structuredClone(containersBoard);
    let containerIndex = newContainersBoard.containers.findIndex(container => container.id == containerId);
    let containerToChange = newContainersBoard.containers[containerIndex]

    containerToChange.currentMaterialId += 1

    const newMaterial : MaterialType = {
      id: containerToChange.currentMaterialId,
      title: 'titulo',
      amount: 0,
      minimumStock: 0,
      limitDate: new Date().toLocaleString('pt-BR')
    }

    containerToChange?.materials?.push(newMaterial)

    setContainersBoard(newContainersBoard);
  }

  function removeContainer(containerId: number) {
    const newContainersBoard = structuredClone(containersBoard);
    newContainersBoard.containers = newContainersBoard.containers.filter(container => container.id != containerId)
    setContainersBoard(newContainersBoard);
  }

  function removeMaterial(containerId: number, materialId: number) {
    const newContainersBoard = structuredClone(containersBoard);
    let containerIndex = newContainersBoard.containers.findIndex(container => container.id == containerId);
    let containerToChange = newContainersBoard.containers[containerIndex]
    containerToChange.materials = containerToChange.materials.filter(material => material.id != materialId)
    setContainersBoard(newContainersBoard);
  }

  const currentContainer = containersBoard.containers.find(container => container.id == navigation.currentContainerId);

  if (navigation.currentContainerId !== undefined && currentContainer !== undefined){
    const handleChangeClosure = (e : any, materialId ?: number) => handleChange(e, currentContainer.id, materialId)
    const addMaterialClosure = () => addMaterial(currentContainer.id)
    const removeMaterialClosure = (materialId : number) => removeMaterial(currentContainer.id, materialId)
    
    return (
      <div>
        <ContainerForm setCurrentContainer={setCurrentContainer} key={currentContainer.id} container={currentContainer} handleChange={handleChangeClosure} addMaterial={addMaterialClosure} removeMaterial={removeMaterialClosure}/>
      </div>
    );
  } else {
    return (
      <div>
        <ContainerBoard setCurrentContainer={setCurrentContainer} addContainer={addContainer} removeContainer={removeContainer} containerBoard={containersBoard}></ContainerBoard>
      </div>
    );
  }
}

export default Dashboard
