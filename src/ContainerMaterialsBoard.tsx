import { CardHeader } from "./CardHeader.tsx"
import { Card } from "./Card.tsx"
import type { MaterialType } from "./Material.tsx"
import { Material } from "./Material.tsx"
import { CardFooter } from "./CardFooter.tsx"

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
        <CardHeader hasAddButton={true} url="/" title={containerMaterialBoard.title}></CardHeader>  
        <div className="card-body row d-flex justify-content-center m-3">
            <div className="table-responsive">
                <table  id="example" className="w-100 table table-hover dataTable table-striped">
                    <thead className="">
                        <tr>
                            <th>Nome</th>
                            <th>Quantidade</th>
                            <th>Estoque mínimo</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {containerMaterialBoard.materials.map((material) => {
                            return <Material key={material.title} material={material}/>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
        <CardFooter hasConfirmButton={false} hasReturnButton={true} ></CardFooter>
      </Card>
    </div>   
  );
}