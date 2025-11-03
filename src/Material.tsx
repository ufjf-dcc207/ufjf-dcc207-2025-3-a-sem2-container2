import { Button } from "./Button";

export type MaterialType = {
  title: string,
  amount: number,
  minimumStock: number,
  restockLimit?: string
}

type MaterialProps = {
  material: MaterialType
}

export function Material({ material }: MaterialProps) {
  return (
    <tr>
        <td className="col-2">{material.title}</td>
        <td className={`col-2 ${material.minimumStock !== null && material.amount < material.minimumStock ? 'text-danger' : ''}`}>{material.amount}</td>
        <td className="col-2 justify-content-center">{material.minimumStock}</td>
        <td className="col-3">{material.restockLimit ? new Date(material.restockLimit).toLocaleString('pt-BR') : "-"}</td>
        <td>
            <div>
              <Button button={{url: "/", type: "link", buttonName: "Quantidade", customStyle: "ml-2 btn btn-dark float-right"}}></Button>
              <Button button={{url: "/", type: "link", buttonName: "Visualizar", customStyle: "btn btn-primary float-right"}}></Button>
            </div>
        </td>
    </tr>
  );
}