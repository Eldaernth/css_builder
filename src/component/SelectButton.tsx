import React from 'react'
import {SelectableItem} from '../style/Css_Builder_styles'

type Props = {text:string}

function SelectButton({text}:Props) {
    return (
        <SelectableItem >
            {text}
        </SelectableItem>
    )
}

export default SelectButton
