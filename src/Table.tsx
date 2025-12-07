type TableType = {
    headers: Array<string>
    hasActions: boolean
}

type TableProps = {
    table: TableType
    children?: React.ReactNode
}

export function Table({table, children}: TableProps) {
    return (
        <div className="table-responsive">
            <table  id="example" className="w-100 table table-hover dataTable table-striped">
                <thead className="">
                    <tr>
                        {table.headers.map((header, idx) => {
                            return <th key={idx}>{header}</th>
                        })}
                        {table.hasActions && <th></th>}
                    </tr>
                </thead>
                <tbody>
                    {children}
                </tbody>
            </table>
        </div>
    );
}
