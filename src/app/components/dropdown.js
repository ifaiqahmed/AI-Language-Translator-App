"use client";

export const Dropdown = ({name, value, onChange, options})=> {
    return <select name="languageFrom" className="rounded-md border-input bg-background px-3 py-2 focus:ring-blue-200 border mb-2 w-fit" value={value} onChange={(e)=> onChange(e.target.value)} >
        {
            options.map((option, index)=>(
                <option key={`${name}_${index}`} value={option.value} >{option.label}
                </option>
            ))
        }
     
        </select>
}