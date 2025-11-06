import { Button } from "./Button";
import { CustomInput } from "./CustomInput";

export type MaterialType = {
  title: string,
  amount: number,
  minimumStock?: number,
  limitDate: string
}

type MaterialProps = {
  material: MaterialType
}

export function Material({ material }: MaterialProps) {
  return (
    <tr>
        <td className={material.minimumStock ? "col-2" : "col-3"}>
          <input type="text" className="form-control bg-transparent border-0" value={material.title} />
        </td>
        {!material.minimumStock ? 
          <td className="col-3">
            <CustomInput isSelect={false} type={"number"} inputCustomStyle="bg-transparent border-0" setValue={material.amount}></CustomInput>
          </td> : 
          <td className="col-2">
            <CustomInput isSelect={false} type={"number"} inputCustomStyle={`bg-transparent border-0 ${material.amount < material.minimumStock ? 'text-danger' : ''}`} setValue={material.amount}></CustomInput>
          </td>
        }
        {material.minimumStock && 
          <td className="col-2 justify-content-center">
            <CustomInput isSelect={false} type={"number"} inputCustomStyle="bg-transparent border-0" setValue={material.minimumStock}></CustomInput>
          </td>
        }
        <td className="col-3">
          <CustomInput isSelect={false} type={"text"} inputCustomStyle="bg-transparent border-0" setValue={material.limitDate ? new Date(material.limitDate).toLocaleString('pt-BR') : "-"}></CustomInput>
        </td>
        <td>
            <div>
              <Button button={{url: "/", type: "link", buttonName: "Apagar", customStyle: "ml-2 btn btn-danger float-right"}}></Button>
              <Button button={{url: "/", type: "link", buttonName: "Editar", customStyle: "btn btn-primary float-right"}}></Button>
            </div>
        </td>
    </tr>
  );
}