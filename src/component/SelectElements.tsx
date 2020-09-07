import React from 'react'
import SelectButton from './SelectButton'
import { withTheme } from 'styled-components'
import {ElementContext} from '../context/ElementContext'

type Props={
    name:string
    elementId:number|undefined
}

function SelectElements({name,elementId}:Props) {
    const context = React.useContext(ElementContext);
    return (
        <SelectButton text={`${name}`}
                            htmlElement={React.createElement(`${name.toLowerCase()}`,{key:`${elementId}`,id:`${name}`,
                            onClick: (e:Event) => {context?.elementMethods?.selectTargetElement(e.target as HTMLElement)}},"Temp")}/>
    )
}

export default SelectElements
