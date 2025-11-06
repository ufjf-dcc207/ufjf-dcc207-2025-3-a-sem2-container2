type OptionType = {
    optionLabel: string
    optionValue: string
}

type InputProps = {
    customLabel?: string
    setValue?: string | number
    isSelect: boolean
    type: string
    options?: Array<OptionType>
    divCustomStyle?: string
    inputCustomStyle?: string
}

export function CustomInput({ customLabel, setValue, isSelect, type, options, divCustomStyle, inputCustomStyle} : InputProps) {
    return (
        <div className={`form-group ${divCustomStyle}`}>
            {customLabel && <label className="required">{customLabel}</label>}
            {!isSelect ? <input type={type} className={`form-control ${inputCustomStyle}`} value={setValue}/> : 
                <select className="form-control" value={setValue}>
                    {options?.map((option) => {
                        return <option value={option.optionValue}>{option.optionLabel}</option>
                    })}
                </select>
            }
        </div>
    )
}