import { Button } from "./Button";

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
        <td className={material.minimumStock ? "col-2" : "col-3"}>{material.title}</td>
        {!material.minimumStock ? <td className="col-3">{material.amount}</td> : <td className={`col-2 ${material.amount < material.minimumStock ? 'text-danger' : ''}`}>{material.amount}</td>}
        {material.minimumStock && <td className="col-2 justify-content-center">{material.minimumStock}</td>}
        <td className="col-3">{material.limitDate ? new Date(material.limitDate).toLocaleString('pt-BR') : "-"}</td>
        <td>
            <div>
              <Button button={{url: "/", type: "link", buttonName: "Apagar", customStyle: "ml-2 btn btn-danger float-right"}}></Button>
              <Button button={{url: "/", type: "link", buttonName: "Visualizar", customStyle: "btn btn-primary float-right"}}></Button>
            </div>
        </td>
    </tr>
  );
}