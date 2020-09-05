import React from 'react'
import {Container,Builder,Menu,CreateMenu,ElementSelectContainer,Title} from '../style/Css_Builder_styles'
import SelectButton from '../component/SelectButton'
import {ElementContext} from '../context/ElementContext'
import SelectElements from '../component/SelectElements'

function Css_Builder() {
    const context = React.useContext(ElementContext);
    const [elementName,setElementName] = React.useState(["Button","Div","P","H1","H2","Ul","Ol","Table","Form","Select"]);

    return (
        <Container>
            <Builder>
            {context?.element?.map((item)=>
             item.htmlElement)}
            </Builder>
            <Menu>
                <CreateMenu>
                    <Title>Create Element</Title>  
                    <ElementSelectContainer>
                        {elementName.map((name)=>(
                            <SelectElements name={name} id={context?.id}/>
                        ))}
                    </ElementSelectContainer>
                </CreateMenu>
            </Menu>
        </Container>
    )
}

export default Css_Builder
