import { Button } from 'antd'
import React from 'react'

const ButtonComponent = ({ size, styleButton, textbutton, disabled, styletextbutton, ...rests }) => {
    return (
        <Button size={size} style={{
            ...styleButton,
            backgroundColor: "rgba(255,172,10,.6)", border: "none", borderRadius: "unset", color: "white"
        }} disabled={disabled}
            {...rests}>
            <span>{textbutton}</span>
        </Button>
    )
}

export default ButtonComponent
