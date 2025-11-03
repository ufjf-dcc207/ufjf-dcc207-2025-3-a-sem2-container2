import { CardHeader } from "./CardHeader.tsx"
import { Card } from "./Card.tsx"
import type { ContainerType } from "./Container.tsx"
import { Container } from "./Container.tsx"
import { CardFooter } from "./CardFooter.tsx"

export type ContainerBoardType = {
  title: string,
  containers: Array<ContainerType>
}

type ContainerBoardProps = {
  containerBoard: ContainerBoardType
}

export function ContainerBoard({ containerBoard }: ContainerBoardProps) {
  return (
    <div className='row'>
      <Card containerCard={false}>
        <CardHeader hasAddButton={true} url="/" title={containerBoard.title}></CardHeader>     
        <div className="card-body row d-flex justify-content-center">
            {containerBoard.containers.map((container) => {
                return <Container key={container.title} container={container}/>
            })}
        </div>
        <CardFooter hasConfirmButton={false} hasReturnButton={false} ></CardFooter>
      </Card>
    </div>
  );
}
