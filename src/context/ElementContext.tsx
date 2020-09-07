import React from "react";

type elementType = {
  id: number;
  name: string;
  htmlElement: JSX.Element;
};
type elementMethods = {
  addElement: (item: elementType) => void;
  changeId: () => void;
  selectTargetElement:(element:HTMLElement | null) => void;
};

type contextType = {
  elements: elementType[] | undefined;
  elementMethods: elementMethods | undefined;
  id: number;
  targetElement: HTMLElement | undefined | null;
};

type Props = {
  children: React.ReactNode;
};

export const ElementContext = React.createContext<contextType | undefined>(
  undefined
);

export function ElementContextProvider({ children }: Props) {
  const [id, setId] = React.useState(0);
  const [elements, setElement] = React.useState<elementType[]>([]);
  const [targetElement, setTargetElement] = React.useState<HTMLElement | null>();
  const elementMethods = {
    addElement: (item: elementType) => {
      setElement((prev) => [...prev, item]);
    },
    changeId: () => {setId(id + 1)
    },
    selectTargetElement: (element: HTMLElement | null) => {
        setTargetElement(element);
    }
  };
  return (
    <ElementContext.Provider
      value={{elements, elementMethods, id, targetElement }}
    >
      {children}
    </ElementContext.Provider>
  );
}

export default ElementContext;
