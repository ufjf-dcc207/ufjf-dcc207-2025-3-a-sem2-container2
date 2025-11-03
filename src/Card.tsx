type Card = {
  containerCard: boolean
  containerType?: string
  children?: React.ReactNode
}

export function Card({ containerCard, containerType, children }: Card) {
  return (
    <div className={containerCard ? "m-3 col-5" : "col-md-10 offset-md-1 col-12 mt-3"}>
      <div className={`card card-outline ${!containerCard ? "card-secondary" : ""} 
        ${containerType !== null && containerType === "stock" ? "card-primary" : ""} 
        ${containerType !== null && containerType === "transport" ? "card-success" : ""}`}>
        {children}
      </div>
    </div>
  );
}
