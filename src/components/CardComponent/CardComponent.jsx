import React from 'react'
import { StyleNameProduct, WrapperCardStyle, WrapperDiscountText, WrapperImageStyle, WrapperPriceText, WrapperReportText, WrapperStyleTextSell } from './style'
import {
    StarFilled
} from '@ant-design/icons';
import official from "../../assets/images/official.png"
import { useNavigate } from 'react-router-dom'
import { convertPrice } from '../../utils';
const CardComponent = (props) => {
    const { countInStock, description, image, name, price, rating, type, discount, selled, id } = props
    const navigate = useNavigate()
    const handleDetailsProduct = (id) => {
        navigate(`/product-details/${id}`)
    }
    return (
        <WrapperCardStyle
            hoverable
            style={{ width: 200 }}
            bodyStyle={{ padding: "10px" }}
            cover={<img alt="example" src={image} />}
            onClick={() => countInStock !== 0 && handleDetailsProduct(id)}
            disabled={countInStock === 0}
        >
            <img
                src={official}
                style={{
                    width: "68px",
                    height: "14px",
                    position: "absolute",
                    top: -1, left: -1,
                    borderTopLeftRadius: "3px"
                }}
            />
            <StyleNameProduct>
                {name}
            </StyleNameProduct>
            <WrapperReportText>
                <span>
                    <span style={{ marginRight: "4px" }}>
                        {rating}
                    </span>
                    <StarFilled style={{ fontSize: "12px", color: 'yellow' }} />
                </span>
                <WrapperStyleTextSell>
                    | Đã bán {selled || 1000}+
                </WrapperStyleTextSell>
            </WrapperReportText>
            <WrapperPriceText>
                <span style={{ marginRight: '8px' }}>{convertPrice(price)}</span>
                <WrapperDiscountText>
                    - {discount || 5} %
                </WrapperDiscountText>
            </WrapperPriceText>
        </WrapperCardStyle>
    )
}

export default CardComponent
