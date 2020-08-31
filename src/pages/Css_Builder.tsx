import React from 'react'
import {Container,Builder,Menu,CreateMenu,ElementSelectContainer,Title} from '../style/Css_Builder_styles'
import SelectButton from '../component/SelectButton'

function Css_Builder() {
    return (
        <Container>
            <Builder></Builder>
            <Menu>
                <CreateMenu>
                    <Title>Create Element</Title>  
                    <ElementSelectContainer>
                        <SelectButton text="Button"/>
                    </ElementSelectContainer>
                </CreateMenu>
            </Menu>
        </Container>
    )
}

export default Css_Builder
