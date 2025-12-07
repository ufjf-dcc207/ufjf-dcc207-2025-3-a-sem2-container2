import { Button } from "./Button";
import { CustomInput } from "./CustomInput";

export type MaterialType = {
  id: number,
  title: string,
  amount: number,
  minimumStock?: number,
  limitDate: string
}

type MaterialProps = {
  material: MaterialType,
  handleChange?: any
}

export function Material({ material, handleChange }: MaterialProps) {
  return (
    <tr>
        <td className={material.minimumStock ? "col-2" : "col-3"}>
          <CustomInput type={"text"} isSelect={false} inputCustomStyle="bg-transparent border-0" setName={"title"} setValue={material.title} onChangeFunction={handleChange}/>
        </td>
        {!material.minimumStock ? 
          <td className="col-3">
            <CustomInput isSelect={false} type={"number"} inputCustomStyle="bg-transparent border-0" setName={"amount"} setValue={material.amount} onChangeFunction={handleChange}></CustomInput>
          </td> : 
          <td className="col-2">
            <CustomInput isSelect={false} type={"number"} inputCustomStyle={`bg-transparent border-0 ${material.amount < material.minimumStock ? 'text-danger' : ''}`} setName={"amount"} setValue={material.amount} onChangeFunction={handleChange}></CustomInput>
          </td>
        }
        {material.minimumStock && 
          <td className="col-2 justify-content-center">
            <CustomInput isSelect={false} type={"number"} inputCustomStyle="bg-transparent border-0" setName={"minimumStock"} setValue={material.minimumStock} onChangeFunction={handleChange}></CustomInput>
          </td>
        }
        <td className="col-3">
          <CustomInput isSelect={false} type={"text"} inputCustomStyle="bg-transparent border-0" setName={"limitDate"} setValue={material.limitDate ? new Date(material.limitDate).toLocaleString('pt-BR') : "-"} onChangeFunction={handleChange}></CustomInput>
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