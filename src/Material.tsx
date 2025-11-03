import { Button } from "./Button";

export type MaterialType = {
  title: string,
  amount: number,
  minimumStock: number,
  restockLimit?: Date
}

type MaterialProps = {
  material: MaterialType
}

export function Material({ material }: MaterialProps) {
  return (
    <tr>
        <td className="col-3">{material.title}</td>
        <td className={`col-3 ${material.minimumStock !== null && material.amount < material.minimumStock ? 'text-danger' : ''}`}>{material.amount}</td>
        <td className="col-3 justify-content-center">{material.minimumStock}</td>
        <td>
            <div>
              <Button button={{url: "/", type: "link", buttonName: "Quantidade", style: "ml-2 btn btn-dark float-right"}}></Button>
              <Button button={{url: "/", type: "link", buttonName: "Visualizar", style: "btn btn-primary float-right"}}></Button>
            </div>
        </td>
    </tr>
  );
}