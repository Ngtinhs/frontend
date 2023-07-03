import { Col, Image, InputNumber, Row } from 'antd'
import React from 'react'
import images from '../../assets/images/Products/1.webp'
import imagesSmall from '../../assets/images/Products/anhnho1.webp'
import { WrapperAdressProduct, WrapperBtnQuantityProduct, WrapperPriceProduct, WrapperPriceTextProduct, WrapperQuantityProduct, WrapperStyleColImage, WrapperStyleImageSmall, WrapperStyleNameProduct, WrapperStyleTextSell, WrapperinputNumber } from './style'
import {
    MinusOutlined,
    PlusOutlined,
    StarFilled
} from '@ant-design/icons';
import ButtonComponent from '../ButtonComponent/ButtonComponent'
const ProductDetailscomponent = () => {
    return (
        <Row style={{ padding: "16px", backgroundColor: "#fff", borderRadius: "4px" }}>
            <Col span={10} style={{ borderRight: "1px solid #e5e5e5", paddingRight: "8px" }}>
                <Image src={images} alt='mainphoto' preview={false} />
                <Row style={{ paddingTop: "10px", justifyContent: "space-between" }}>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imagesSmall} alt='img product' preview={false} />
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imagesSmall} alt='img product' preview={false} />
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imagesSmall} alt='img product' preview={false} />
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imagesSmall} alt='img product' preview={false} />
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imagesSmall} alt='img product' preview={false} />
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imagesSmall} alt='img product' preview={false} />
                    </WrapperStyleColImage>
                </Row>
            </Col>
            <Col span={14} style={{ paddingLeft: "10px" }}>
                <WrapperStyleNameProduct>Apple iPhone 14 Pro Max</WrapperStyleNameProduct>
                <div>
                    <StarFilled style={{ fontSize: "12px", color: 'yellow' }} />
                    <StarFilled style={{ fontSize: "12px", color: 'yellow' }} />
                    <StarFilled style={{ fontSize: "12px", color: 'yellow' }} />
                    <WrapperStyleTextSell> | Đã bán 1000+</WrapperStyleTextSell>
                </div>
                <WrapperPriceProduct>
                    <WrapperPriceTextProduct>200.000đ</WrapperPriceTextProduct>
                </WrapperPriceProduct>
                <WrapperAdressProduct>
                    <span>Giao đến </span>
                    <span className='address'>98/22A Năm Châu, Phường 11, Quận Tân bình</span> -
                    <span className='change-address'>Đổi địa chỉ</span>
                </WrapperAdressProduct>

                <div style={{ margin: "10px 0 20px", borderTop: "1px solid #e5e5e5", borderBottom: "1px solid #e5e5e5", padding: "10px 0" }}>
                    <div style={{ marginBottom: "10px" }}>Số lượng</div>
                    <WrapperQuantityProduct>
                        <button style={{ border: "none", background: "transparent" }}>
                            <MinusOutlined style={{ color: '#000', fontSize: "20px" }} />
                        </button>
                        <WrapperinputNumber defaultValue={3} />
                        <button style={{ border: "none", background: "transparent" }}>
                            <PlusOutlined style={{ color: '#000', fontSize: "20px" }} />
                        </button>
                    </WrapperQuantityProduct>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <ButtonComponent size={20} style={{
                        backgroundColor: "rgb(255, 172, 10)", color: "white", fontSize: "15px", fontWeight: "500", height: "48px", width: "220px", border: "none", borderRadius: "4px"
                    }}
                        textButton={"Chọn mua"}>
                    </ButtonComponent>

                    <ButtonComponent size={20} style={{
                        backgroundColor: "#fff", color: "rgb(255, 172, 10)", fontSize: "15px", height: "48px", width: "220px", border: "1px solid rgb(255, 172, 10)", borderRadius: "4px"
                    }}
                        textButton={"Mua trả sau"}>
                    </ButtonComponent>
                </div>
            </Col>
        </Row>
    )
}

export default ProductDetailscomponent
