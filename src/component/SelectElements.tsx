import React from "react";
import SelectButton from "./SelectButton";
import { withTheme } from "styled-components";
import { ElementContext } from "../context/ElementContext";

type Props = {
  name: string;
  elementId: number | undefined;
};

function SelectElements({ name, elementId }: Props) {
  const context = React.useContext(ElementContext);
  return (
    <SelectButton
      text={`${name}`}
      htmlElement={React.createElement(
        `${name.toLowerCase()}`,
        {
          key: `${elementId}`,
          id: `${name}`,
          onMouseOver: (e: Event) => {
            (e.target as HTMLElement).setAttribute(
              "style",
              "box-shadow: 3px 3px 6px 6px rgba(0,0,0,0.5);"
            );
          },
          onMouseOut: (e: Event) => {
            (e.target as HTMLElement).setAttribute("style", "box-shadow: none");
          },
          onClick: (e: Event) => {
            context?.elementMethods?.selectTargetElement(
              e.target as HTMLElement
            );
          },
        },
        "Temp"
      )}
    />
  );
}

export default SelectElements;
