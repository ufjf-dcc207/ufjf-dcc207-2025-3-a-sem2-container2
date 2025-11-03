import { AddButton } from "./AddButton";

type CardHeaderProps = {
    hasAddButton: boolean
    url: string
    title: string
}

export function CardHeader({title, url, hasAddButton} : CardHeaderProps) {
    return (
        <div className="card-header">
            <h3 className="card-title title-form">{title}</h3>            
            {hasAddButton && <AddButton url={url}></AddButton>}
        </div> 
    );
}

