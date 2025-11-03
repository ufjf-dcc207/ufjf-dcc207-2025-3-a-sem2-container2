type CardHeaderProps = {
    title: string
    children?: React.ReactNode
}

export function CardHeader({title, children} : CardHeaderProps) {
    return (
        <div className="card-header">
            <h3 className="card-title title-form">{title}</h3>
            {children}
        </div> 
    );
}

