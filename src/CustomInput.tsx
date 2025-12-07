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
    onChangeFunction?: any
    setName: string
}

export function CustomInput({ customLabel, setValue, isSelect, type, options, divCustomStyle, inputCustomStyle, onChangeFunction, setName } : InputProps) {        
    return (
        <div className={`form-group ${divCustomStyle}`}>
            {customLabel && <label className="required">{customLabel}</label>}
            {!isSelect ? <input type={type} className={`form-control ${inputCustomStyle}`} name={setName} value={setValue} onChange={onChangeFunction} /> : 
                <select className="form-control" name={setName} value={setValue} onChange={onChangeFunction}>
                    {options?.map((option, idx) => {
                        return <option key={idx} value={option.optionValue}>{option.optionLabel}</option>
                    })}
                </select>
            }
        </div>
    )
}