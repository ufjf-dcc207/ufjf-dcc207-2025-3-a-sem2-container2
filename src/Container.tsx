import { Card } from "./Card.tsx"

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
      <div className="card-body">
        <h2>
          {container.info}
        </h2>
        <h3 className={container.alert ? "text-danger" : "text-secondary"}>
          {container.alert && container.type == 'transport' ? "A entrega está atrasada" : 
            container.alert && container.type == 'stock' ? "Este estoque precisa de reposição" : "Não existem problemas com o container"}
        </h3>
      </div>

      <div className="card-footer">
        <button className="ml-2 btn btn-danger float-right">
          Excluir
        </button>
        <button className=" btn btn-primary float-right">
          Visualizar
        </button>
      </div>
    </Card>
  );
}
