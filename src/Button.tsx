export type ButtonType = {
    url?: string
    form?: string
    type: string
    buttonName: string
    customStyle: string
}

type ButtonProps = {
  button: ButtonType
}

export function Button({ button } : ButtonProps) {
    return (
        <div className="float-right mr-2">
            <div className="input-group input-group-sm">
                { button.type === "link" &&
                    <a href={button.url}>
                        <button type="button" className={button.customStyle}>
                            <b>{button.buttonName}</b>
                        </button>
                    </a>
                }
                { button.type === "form" &&
                    <button type="submit" form={button.form} className={button.customStyle}>
                        <b>{button.buttonName}</b>
                    </button>
                }
            </div>
        </div>
    );
}