import styled from "styled-components";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

export const WrapperTypeProduct = styled.div`
display: flex;
align-items: center;
gap: 30px;
justify-content: flex-start;
border-bottom: 1px solid red;
height: 55px;
`

export const WrapperButtonMore = styled(ButtonComponent)`
color: #ffd400;
font-weight: 500;
width: 100%;
background-color: #fff;

&: hover {
    color: #fff;
    background: #ffd400
}
`

export const WrapperProducts = styled.div`
display: flex;
justify-content: center;
gap: 15px;
margin-top: 20px;
flex-wrap: wrap;
}
`