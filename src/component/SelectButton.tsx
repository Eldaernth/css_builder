import React from 'react'
import {SelectableItem} from '../style/Css_Builder_styles'
import {ElementContext} from '../context/ElementContext'

type Props = {
    text:string
    htmlElement:JSX.Element
}

function SelectButton({text,htmlElement}:Props) {
    const context  = React.useContext(ElementContext);
    return (
        <SelectableItem onClick={()=>{(context?.elementMethods?.changeId());
                                    context?.elementMethods?.addElement({id:context.id,htmlElement:htmlElement})}}>
            {text}
        </SelectableItem>
    )
}

export default SelectButton
