import { Button } from "./Button.tsx"
import { Card } from "./Card.tsx"
import { CardBody } from "./CardBody.tsx"
import { CardFooter } from "./CardFooter.tsx"
import { CardHeader } from "./CardHeader.tsx"

export type ContainerType = {
  title: string,
  type: string,
  info: string,
  alert: boolean
}

type ContainerProps = {
  container: ContainerType
}

export function Container({ container }: ContainerProps) {
  return (
    <Card containerCard={true} containerType={container.type}>
      <CardHeader title={container.title}></CardHeader>
      
      <CardBody>
        <h2>
          {container.info}
        </h2>
        <h3 className={container.alert ? "text-danger" : "text-secondary"}>
          {container.alert && container.type == 'transport' ? "A entrega está atrasada" : 
            container.alert && container.type == 'stock' ? "Este estoque precisa de reposição" : "Não existem problemas com o container"}
        </h3>
      </CardBody>

      <CardFooter>
        <Button button={{form: "form", type: "form", buttonName: "Excluir", customStyle: "btn btn-danger float-right"}} ></Button>
        <Button button={{url: "/", type: "link", buttonName: "Visualizar", customStyle: "btn btn-primary float-right"}} ></Button>
      </CardFooter>
    </Card>
  );
}
