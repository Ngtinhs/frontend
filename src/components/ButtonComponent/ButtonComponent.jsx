import { Button } from 'antd'
import React from 'react'

const ButtonComponent = ({ size, textButton, disabled, ...rests }) => {
    return (
        <Button size={size} style={{
            backgroundColor: "rgba(255,172,10,.6)", border: "none", borderRadius: "unset", color: "white"
        }} disabled={disabled}
            {...rests}>
            <span>{textButton}</span>
        </Button>
    )
}

export default ButtonComponent
