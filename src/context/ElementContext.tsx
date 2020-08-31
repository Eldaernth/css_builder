import React from 'react'

type elementType = {
    id:number,
    htmlElement:JSX.Element  
};
type elementMethods = {
    addElement:(item:elementType)=>void
    changeId:()=>void
};

type contextType ={
    element:elementType[]|undefined,
    elementMethods:elementMethods|undefined,
    id:number
};

type Props = {
    children: React.ReactNode
  };

export const ElementContext = React.createContext<contextType | undefined>(undefined)

export function ElementContextProvider({children}:Props) {
    const [id,setId] = React.useState(0);
    const [element, setElement] = React.useState<elementType[]>([])
    const elementMethods ={
        addElement:(item:elementType)=>{setElement((prev)=>[...prev,item])},
        changeId:()=>setId(id+1)
    }
console.log(element);
    return (
        <ElementContext.Provider value={{element , elementMethods,id}}>
            {children}
        </ElementContext.Provider>
    )
}

export default ElementContext
