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
                <button className="ml-2 btn btn-dark float-right">
                Quantidade
                </button>
                <button className=" btn btn-primary float-right">
                Visualizar
                </button>
            </div>
        </td>
    </tr>
  );
}