import { Row } from "antd";
import styled from "styled-components";

export const WrapperHeader = styled(Row)`
padding: 10px 120px;
background-color: #ffd400;
align-items: center;
gap: 16px;
flex-wrap: nowrap;
width: 1270px;
padding: 10px 0;
`

export const WrapperTextHeader = styled.span`
font-weight: bold;
font-size: 18px;
color: #fff;
text-align: left;
`

export const WrapperHeaderAccount = styled.div`
display: flex;
align-items: center;
color: #fff;
gap: 10px;
`

export const WrapperTextHeaderSmall = styled.span`
font-size: 12px;
color: #fff;
white-space: nowrap;
`

export const WrapperContentPopup = styled.p`
cursor: pointer;
&:hover {
    background-color: rgb(255, 212, 0);
    color: #fff;
}
`

