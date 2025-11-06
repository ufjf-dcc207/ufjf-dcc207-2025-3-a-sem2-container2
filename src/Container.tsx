import { Button } from "./Button.tsx"
import { Card } from "./Card.tsx"
import { CardBody } from "./CardBody.tsx"
import { CardFooter } from "./CardFooter.tsx"
import { CardHeader } from "./CardHeader.tsx"
import type { MaterialType } from "./Material.tsx"

export type ContainerType = {
  title: string,
  type: string,
  info: string,
  alert: boolean
  materials?: Array<MaterialType>
}

type ContainerProps = {
  container: ContainerType
}

export function Container({ container }: ContainerProps) {
  return (
    <Card containerCard={true}>
      <CardHeader title={container.title}>
        {container.type === 'stock' && <span className="float-left fa-2x mr-2 mt-1">📦</span>}
        {container.type === 'transport' && <span className="float-left fa-2x mr-2">🚢</span>}
      </CardHeader>

      <CardBody>
        <h4>
          {container.info}
        </h4>
        <h5 className={container.alert ? "text-danger" : "text-secondary"}>
          {container.alert && container.type == 'transport' ? "A entrega está atrasada" : 
            container.alert && container.type == 'stock' ? "Este estoque precisa de reposição" : "Não existem problemas com o container"}
        </h5>
      </CardBody>

      <CardFooter>
        <Button button={{form: "form", type: "form", buttonName: "Excluir", customStyle: "btn btn-danger float-right"}} ></Button>
        <Button button={{url: "/", type: "link", buttonName: "Visualizar", customStyle: "btn btn-primary float-right"}} ></Button>
      </CardFooter>
    </Card>
  );
}