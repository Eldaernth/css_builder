import React from "react";
import {
  Container,
  Builder,
  Menu,
  MenuPart,
  ElementSelectContainer,
  Title,
} from "../style/Css_Builder_styles";
import Helmet from "react-helmet";
import { ElementContext } from "../context/ElementContext";
import SelectElements from "../component/SelectElements";
import PropertiesMenu from "../component/PropertiesMenu";

function Css_Builder() {
  const context = React.useContext(ElementContext);
  const [elementName, setElementName] = React.useState([
    "Button",
    "Div",
    "P",
    "H1",
    "H2",
    "Ul",
    "Ol",
    "Table",
    "Form",
    "Select",
  ]);

  return (
    <Container>
      <Helmet>
        <title>Page builder</title>
        <meta
          name="description"
          content="Create a page looks without programming."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <Builder>{context?.elements?.map((item) => item.htmlElement)}</Builder>
      <Menu>
        <MenuPart>
          <Title>Create Element</Title>
          <ElementSelectContainer>
            {elementName.map((name) => (
              <SelectElements name={name} elementId={context?.id} />
            ))}
          </ElementSelectContainer>
        </MenuPart>
        <MenuPart>
          <PropertiesMenu />
        </MenuPart>
      </Menu>
    </Container>
  );
}

export default Css_Builder;
