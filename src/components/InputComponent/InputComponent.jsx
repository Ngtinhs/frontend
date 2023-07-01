import { Input } from 'antd'
import React from 'react'

const InputComponent = ({ size, placeholder }) => {
    return (
        <Input size={size} placeholder={placeholder} style={{
            backgroundColor: "#fff", border: "none", borderRadius: "unset"
        }} allowClear />
    )
}

export default InputComponent
