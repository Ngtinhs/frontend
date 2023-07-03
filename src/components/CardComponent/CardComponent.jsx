import React from 'react'
import { StyleNameProduct, WrapperCardStyle, WrapperDiscountText, WrapperImageStyle, WrapperPriceText, WrapperReportText, WrapperStyleTextSell } from './style'
import {
    StarFilled
} from '@ant-design/icons';
import official from "../../assets/images/official.png"
const CardComponent = () => {
    return (
        <WrapperCardStyle
            hoverable
            style={{ width: 200 }}
            bodyStyle={{ padding: "10px" }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
            <img src={official} style={{ width: "68px", height: "14px", position: "absolute", top: -1, left: -1, borderTopLeftRadius: "3px" }} />
            <StyleNameProduct>
                Iphone
            </StyleNameProduct>
            <WrapperReportText>
                <span>
                    <span style={{ marginRight: "4px" }}>
                        4.96
                    </span>
                    <StarFilled style={{ fontSize: "12px", color: 'yellow' }} />
                </span>
                <WrapperStyleTextSell>
                    | Đã bán 1000+
                </WrapperStyleTextSell>
            </WrapperReportText>
            <WrapperPriceText>
                1.000.000đ
                <WrapperDiscountText>
                    -6%
                </WrapperDiscountText>
            </WrapperPriceText>
        </WrapperCardStyle>
    )
}

export default CardComponent
