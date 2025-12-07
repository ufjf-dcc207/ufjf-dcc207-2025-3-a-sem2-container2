import { CardHeader } from "./CardHeader.tsx"
import { Card } from "./Card.tsx"
import { Container } from "./Container.tsx"
import { Button } from "./Button.tsx"
import { CardBody } from "./CardBody.tsx"
import { type ContainerType } from './Container';


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
        <CardHeader title={containerBoard.title}>
          <Button button={{url: "/", type: "link", buttonName: "Adicionar", customStyle: "btn btn-dark icone-add-table"}} ></Button>
        </CardHeader>     
        <CardBody customStyle="row d-flex justify-content-center">
          {containerBoard.containers.map((container) => {
              return <Container key={container.id} container={container}/>
          })}
        </CardBody>
      </Card>
    </div>
  );
}
