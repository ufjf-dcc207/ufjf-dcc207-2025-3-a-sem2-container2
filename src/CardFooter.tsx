type CardFooterProps = {
    hasConfirmButton: boolean
    hasReturnButton: boolean
}

export function CardFooter({hasConfirmButton, hasReturnButton} : CardFooterProps) {
    return (
        <div className="card-footer">
            {hasConfirmButton && <button className="btn btn-primary float-right">Confirmar</button>}
            {hasReturnButton && <button className="btn btn-dark float-right">Voltar</button>}
        </div>
    );
}

