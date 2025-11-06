type Card = {
  containerCard: boolean
  customStyle?: string
  children?: React.ReactNode
}

export function Card({ containerCard, customStyle, children }: Card) {
  return (
    <div className={customStyle ? customStyle : containerCard ? "m-3 col-5" : "col-md-10 offset-md-1 col-12 mt-3"}>
      <div className="card card-outline card-secondary">
        {children}
      </div>
    </div>
  );
}
