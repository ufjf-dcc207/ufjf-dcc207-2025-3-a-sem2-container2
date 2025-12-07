import { CardHeader } from "./CardHeader.tsx"
import { Card } from "./Card.tsx"
import type { MaterialType } from "./Material.tsx"
import { Material } from "./Material.tsx"
import { Button } from "./Button.tsx"
import { Table } from "./Table.tsx"
import { CardBody } from "./CardBody.tsx"


type ContainerMaterialBoardProps = {
  materials?: Array<MaterialType>
  tableHeaders: Array<string>
  handleChange: any
}

export function ContainerMaterialBoard({ materials, tableHeaders, handleChange }: ContainerMaterialBoardProps) {
  return (
    <Card containerCard={false} customStyle="col-12 mt-5">
      <CardHeader title="Materiais">
        <Button button={{url: "/", type: "link", buttonName: "Adicionar", customStyle: "btn btn-dark icone-add-table"}} ></Button>
      </CardHeader>
      <CardBody customStyle="d-flex justify-content-center m-3">
        <Table table={{ headers: tableHeaders, hasActions: true }}>
          {materials ? materials.map((material) => {

              return <Material key={material.id} material={material} handleChange={handleChange}/>
          }) : ""}
        </Table>
      </CardBody>
    </Card>
  );
}