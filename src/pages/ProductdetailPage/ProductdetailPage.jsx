import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ProductDetailscomponent from '../../components/ProductDetailscomponent/ProductDetailscomponent'

const ProductdetailPage = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    return (
        <div style={{ height: '100vh', with: '100%', background: '#efefef' }}>
            <div style={{ width: '1270px', height: '100%', margin: '0 auto' }}>
                <h5><span style={{ cursor: 'pointer', fontWeight: 'bold' }} onClick={() => { navigate('/') }}>Trang chủ</span> - Chi tiết sản phẩm</h5>
                <ProductDetailscomponent idProduct={id} />
            </div>
        </div>
    )
}

export default ProductdetailPage
