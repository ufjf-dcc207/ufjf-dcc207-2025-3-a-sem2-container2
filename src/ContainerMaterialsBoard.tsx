import { CardHeader } from "./CardHeader.tsx"
import { Card } from "./Card.tsx"
import type { MaterialType } from "./Material.tsx"
import { Material } from "./Material.tsx"
import { Button } from "./Button.tsx"
import { Table } from "./Table.tsx"
import { CardBody } from "./CardBody.tsx"


type ContainerMaterialBoardProps = {
  materials?: Array<MaterialType>
  containerType: string
  tableHeaders: Array<string>
  handleChange: any
  addMaterial: any
  removeMaterial: any
}

export function ContainerMaterialBoard({ materials, containerType, tableHeaders, handleChange, addMaterial, removeMaterial }: ContainerMaterialBoardProps) {
  return (
    <Card containerCard={false} customStyle="col-12 mt-5">
      <CardHeader title="Materiais">
        <Button button={{onClickFunction: addMaterial, url: "", type: "action", buttonName: "Adicionar", customStyle: "btn btn-dark icone-add-table"}} ></Button>
      </CardHeader>
      <CardBody customStyle="d-flex justify-content-center m-3">
        <Table table={{ headers: tableHeaders, hasActions: true }}>
          {materials ? materials.map((material) => {
              return <Material key={material.id} material={material} containerType={containerType} handleChange={handleChange} removeMaterial={removeMaterial}/>
          }) : ""}
        </Table>
      </CardBody>
    </Card>
  );
}