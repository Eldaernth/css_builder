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
`

export const CreateMenu = styled.div`
    width:100%;
    height:100%;
`
export const ElementSelectContainer = styled.div`
    width:100%;
    height:50vh;
`

export const Title = styled.h1``;

export const SelectableItem = styled.button`
    width:45%;
    min-height:3rem;
    background-color:#e0eff9;
    border-radius:10px;
    border:none;
    box-shadow: 2px 6px 6px 0px rgba(0,0,0,1);

    :hover&{
        box-shadow: 2px 4px 6px 0px rgba(0,0,0,1);
        background-color:#d9ebf7;
    }
    :active&{
        box-shadow: 0px 0px 6px 0px rgba(0,0,0,1);
    }
    :focus&{
        outline:none;
    }
`;