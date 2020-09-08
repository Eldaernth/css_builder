import React from "react";
import { ElementContext } from "../context/ElementContext";
import {
  NameInput,
  PropertyInputLabel,
  PropertiesContainer,
} from "../style/Css_Builder_styles";

type Style = {
  width: string;
  height: string;
  backgroundColor: string;
  color: string;
  display: string;
  border: string;
};

const defaultStyle: Style = {
  width: "",
  height: "",
  backgroundColor: "",
  color: "",
  display: "",
  border: "",
};

function PropertiesMenu() {
  const context = React.useContext(ElementContext);
  const [name, setName] = React.useState("");
  const [style, setStyle] = React.useState(defaultStyle);

  const onStyleChange = <T extends keyof Style>(prop: T, value: Style[T]) => {
    setStyle({ ...style, [prop]: value });
  };
  return (
    <PropertiesContainer>
      <NameInput
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <PropertyInputLabel>Width</PropertyInputLabel>
      <input
        type="text"
        onChange={(e) => onStyleChange("width", e.target.value)}
      />
      <PropertyInputLabel>Height</PropertyInputLabel>
      <input
        type="text"
        onChange={(e) => onStyleChange("height", e.target.value)}
      />
      <PropertyInputLabel>Background color</PropertyInputLabel>
      <input
        type="text"
        onChange={(e) => onStyleChange("backgroundColor", e.target.value)}
      />
      <PropertyInputLabel>Color</PropertyInputLabel>
      <input
        type="text"
        onChange={(e) => onStyleChange("color", e.target.value)}
      />
      <PropertyInputLabel>Display</PropertyInputLabel>
      <input
        type="text"
        onChange={(e) => onStyleChange("display", e.target.value)}
      />
      <PropertyInputLabel>Border</PropertyInputLabel>
      <input
        type="text"
        onChange={(e) => onStyleChange("border", e.target.value)}
      />

      <button
        onClick={() => {
          context?.targetElement?.setAttribute(
            "style",
            `width:${style.width};height:${style.height};
            background-color:${style.backgroundColor};color:${style.color};
            display:${style.color};border:${style.border};`
          );
        }}
      >
        Change Style
      </button>
    </PropertiesContainer>
  );
}

export default PropertiesMenu;
