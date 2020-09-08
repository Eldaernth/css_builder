import styled from "styled-components";

export const Container = styled.div`
    width:100%;
    min-height:100vh;
    display:flex;
`
export const Builder = styled.div`
    flex:2;
`

export const Menu = styled.div`
    flex:1;
    background-color:#22223b
`

export const MenuPart = styled.div`
    width:100%;
    margin:0.6rem 0.3rem;
    overflow:scroll;
    &::-webkit-scrollbar {
         display: none;
    } 
    -ms-overflow-style: none;
    scrollbar-width: none;  
`
export const ElementSelectContainer = styled.div`
    width:95%;
    display:flex;
    justify-content:space-between;
    flex-wrap:wrap;
    background-color:#4a4e69;
    padding:10px;
    box-shadow:  inset 0 -1px 5px #000000;
    
`

export const Title = styled.h1`
    margin-block-start: 0.55em;
    margin-block-end: 0.55em;
    color:#9a8c98;
`;

export const SelectableItem = styled.button`
    width:45%;
    min-height:3rem;
    margin:5px 5px 5px 5px;
    padding:5px;
    background-color:#9a8c98;
    border-radius:10px;
    border:none;
    box-shadow: 2px 6px 6px 0px rgba(0,0,0,1);

    :hover&{
        box-shadow: 2px 4px 6px 0px rgba(0,0,0,1);
        background-color:#938591;
    }
    :active&{
        box-shadow: 0px 0px 6px 0px rgba(0,0,0,1);
    }
    :focus&{
        outline:none;
    }
`;

export const NameInput = styled.input`
    width:60%;
    min-height:2rem;
    font-size:2rem;
    margin:0.4rem 0.1rem;
    color:#9a8c98;
    background-color:#22223b;
    border:none;
    border-radius:10px;
    :focus&{
        background-color:#4a4e69;
        transition:0.4s;
        outline:none;
    };
`
export const PropertiesContainer = styled.div`
    width:95%;
    padding:10px;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
`

export const PropertyInputLabel = styled.label`
    font-size:1rem;
    margin:0.3rem;
    color:#9a8c98;
` 
export const PropertyInput = styled.input`
    width: 95%;
    padding: 12px;
    border: 1px solid #9a8c98;
    border-radius: 4px;
    resize: vertical;
    font-size:1rem;
    background-color:#4a4e69;
`
