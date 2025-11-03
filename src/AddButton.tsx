type AddButtonProps = {
  url?: string
}

export function AddButton({url} : AddButtonProps) {
    return (
        <div className="float-right mr-2">
            <div className="input-group input-group-sm">
                <a href={url}>
                    <button type="button" className="btn btn-dark icone-add-table">
                        <b>Adicionar</b>
                    </button>
                </a>
            </div>
        </div>
    );
}