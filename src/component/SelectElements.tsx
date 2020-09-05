import React from 'react'
import SelectButton from './SelectButton'

type Props={
    name:string
    id:number|undefined
}

function SelectElements({name,id}:Props) {
    return (
        <SelectButton text={`${name}`}
                            htmlElement={React.createElement(`${name.toLowerCase()}`,{key:`${id}`,
                            onClick: () => {console.log()}},"Temp")}/>
    )
}

export default SelectElements
