import { CardHeader } from "./CardHeader.tsx"
import { Card } from "./Card.tsx"
import type { MaterialType } from "./Material.tsx"
import { Material } from "./Material.tsx"
import { CardFooter } from "./CardFooter.tsx"
import { Button } from "./Button.tsx"
import { Table } from "./Table.tsx"
import { CardBody } from "./CardBody.tsx"

export type ContainerMaterialBoardType = {
  title: string,
  materials: Array<MaterialType>
}

type ContainerMaterialBoardProps = {
  containerMaterialBoard: ContainerMaterialBoardType
}

export function ContainerMaterialBoard({ containerMaterialBoard }: ContainerMaterialBoardProps) {
  return (
    <div className='row'>
      <Card containerCard={false}>
        <CardHeader title={containerMaterialBoard.title}>
          <Button button={{url: "/", type: "link", buttonName: "Adicionar", customStyle: "btn btn-dark icone-add-table"}} ></Button>
        </CardHeader>
        <CardBody customStyle="row d-flex justify-content-center m-3">
          <Table table={{ headers: ["Nome", "Quantidade", "Estoque mínimo", "Data limite de reestocagem"], hasActions: true }}>
            {containerMaterialBoard.materials.map((material) => {
                return <Material key={material.title} material={material}/>
            })}
          </Table>
        </CardBody>
        <CardFooter>
          <Button button={{url: "/", type: "link", buttonName: "Voltar", customStyle: "btn btn-dark icone-add-table"}} ></Button>
        </CardFooter>
      </Card>
    </div>
  );
}