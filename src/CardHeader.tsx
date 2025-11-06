type CardHeaderProps = {
    title: string
    children?: React.ReactNode
}

export function CardHeader({title, children} : CardHeaderProps) {
    return (
        <div className="card-header">
            {children}
            <h3 className="card-title title-form my-3">{title}</h3>
        </div> 
    );
}

