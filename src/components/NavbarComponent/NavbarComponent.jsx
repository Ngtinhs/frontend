import React from 'react'
import { WrapperContent, WrapperLableText, WrapperTextPrice, WrapperTextValue } from './style'
import { Checkbox, Rate } from 'antd'

const NavbarComponent = () => {
    const renderContent = (type, options) => {
        switch (type) {
            case 'text':
                return options.map((option) => {
                    return <WrapperTextValue>{option}</WrapperTextValue>
                }
                )

            case 'checkbox':
                return <Checkbox.Group
                    style={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '12px',
                    }}
                // onChange={onChange}
                >
                    {options.map((option) => {
                        return (
                            <Checkbox value={option.value}>{option.label}</Checkbox>
                        )
                    })}
                </Checkbox.Group>


            case 'star':
                return options.map((option) => {
                    return (
                        <div style={{ display: 'flex', gap: "5px" }}>
                            <Rate style={{ fontSize: "12px" }} disabled defaultValue={option} />
                            <span>{`Từ ${option} sao
                            `}</span>
                        </div>
                    )


                }
                )
            case 'price':
                return options.map((option) => {
                    return (
                        <WrapperTextPrice>{option}</WrapperTextPrice>
                    )
                }
                )
            default: return {}
        }
    }
    return (
        <div>
            <WrapperLableText>Label</WrapperLableText>
            <WrapperContent>
                {renderContent('text', ['Tủ lạnh', 'TV', 'Điều hòa'])}
            </WrapperContent>
            <WrapperLableText>Label 2</WrapperLableText>
            <WrapperContent>
                {renderContent('star', [
                    3, 4, 5
                ])}
            </WrapperContent>
            <WrapperLableText>Label 3</WrapperLableText>

            <WrapperContent>
                {renderContent('price', [
                    'Dưới 40.000đ', 'Trên 50.000đ'
                ])}
            </WrapperContent>
        </div>
    )
}

export default NavbarComponent
