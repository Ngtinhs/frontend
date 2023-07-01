import React from 'react'
import {
    SearchOutlined
} from '@ant-design/icons';
import InputComponent from '../InputComponent/InputComponent';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
const ButtonInputSearch = (props) => {
    const { size, placeholder, textButton } = props
    return (
        <div style={{ display: "flex" }}>
            <InputComponent size={size} placeholder={placeholder} style={{
                backgroundColor: "#fff", border: "none", borderRadius: "unset"
            }} allowClear />
            <ButtonComponent size={size} style={{
                backgroundColor: "rgba(255,172,10,.6)", border: "none", borderRadius: "unset", color: "white"
            }} icon={<SearchOutlined />}
                textButton={textButton}
            />
        </div>
    )
}

export default ButtonInputSearch
