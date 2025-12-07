import { type ContainerBoardType, ContainerBoard } from './ContainerBoard';
import { ContainerForm } from './ContainerForm';


type DashboardProps = {
  container_data: ContainerBoardType
}

function Dashboard({ container_data }: DashboardProps) {
  return (
    <div>
      <ContainerBoard containerBoard={container_data}></ContainerBoard>
      {container_data.containers.map((container) => {
          return <ContainerForm key={container.title} container={container}/>
      })}
    </div>
  );
}

export default Dashboard
