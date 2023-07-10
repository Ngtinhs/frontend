import React from 'react'
import { WrapperInputStyle } from './style'

const InputForm = (props) => {
    const { placeholder, ...rest } = props
    return (
        <WrapperInputStyle placeholder={placeholder} value={props.value} {...rest} onChange={props.onChange} />
    )
}

export default InputForm
