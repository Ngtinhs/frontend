import { Button, Input } from 'antd'
import React from 'react'
import {
    SearchOutlined
} from '@ant-design/icons';
const ButtonInputSearch = (props) => {
    const { size, placeholder, textButton } = props
    return (
        <div style={{ display: "flex" }}>
            <Input size={size} placeholder={placeholder} style={{
                backgroundColor: "#fff", border: "none", borderRadius: "unset"
            }} allowClear />
            <Button size={size} style={{
                backgroundColor: "rgba(255,172,10,.6)", border: "none", borderRadius: "unset", color: "white"
            }} icon={<SearchOutlined />}>{textButton}</Button>
        </div>
    )
}

export default ButtonInputSearch
