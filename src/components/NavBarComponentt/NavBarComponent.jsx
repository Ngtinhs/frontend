import { Checkbox, Col, Rate, Row } from 'antd'
import React from 'react'
import { WrapperContent, WrapperLableText, WrapperTextPrice, WrapperTextValue } from './style'

const NavBarComponent = () => {
    const onChange = () => { }
    const renderContent = (type, options) => {
        switch (type) {
            case 'text':
                return options.map((option) => {
                    return (
                        <WrapperTextValue>{option}</WrapperTextValue>
                    )
                })

            default:
                return {}
        }
    }

    return (
        <div>
            <WrapperLableText>DANH MỤC SẢN PHẨM</WrapperLableText>
            <WrapperContent>
                {renderContent('text', ['Tu lanh', 'TV', 'MAYGIAT'])}
            </WrapperContent>
        </div>
    )
}

export default NavBarComponent