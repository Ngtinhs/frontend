import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ProductDetailscomponent from '../../components/ProductDetailscomponent/ProductDetailscomponent'

const ProductdetailPage = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    return (
        <div style={{ padding: "0 120px", backgroundColor: "#efefef", height: "1000px" }}>
            <h5><span style={{ cursor: 'pointer', fontWeight: 'bold' }} onClick={() => { navigate('/') }}>Trang chủ</span> - Chi tiết sản phẩm</h5>
            <ProductDetailscomponent idProduct={id} />
        </div>
    )
}

export default ProductdetailPage
