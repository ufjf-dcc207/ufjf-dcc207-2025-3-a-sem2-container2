type CardBodyProps = {
    customStyle?: string
    children?: React.ReactNode
}

export function CardBody({children, customStyle} : CardBodyProps) {
    return (
        <div className={`card-body ${customStyle}`}>
            {children}
        </div>
    );
}

