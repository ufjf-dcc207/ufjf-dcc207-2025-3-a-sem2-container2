type CardBodyProps = {
    style?: string
    children?: React.ReactNode
}

export function CardBody({children, style} : CardBodyProps) {
    return (
        <div className={`card-body ${style}`}>
            {children}
        </div>
    );
}

