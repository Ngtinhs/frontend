import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import HelmetComponent from '../../components/HelmetComponent/HelmetComponent'
import ProductDetailsComponentNew from '../../components/ProductDetailsComponent/ProductDetailscomponentnew'


const ProductDetailsPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  return (
    <>
      <HelmetComponent title={`Chi tiết sản phẩm`} />
      <div style={{ width: '100%', background: '#efefef', height: '100%', padding: "20px 0" }}>
        <div style={{ width: '1270px', height: '100%', margin: '0 auto' }} >
          <h4><span style={{ cursor: 'pointer', fontWeight: 'bold' }} onClick={() => { navigate('/') }}>Trang chủ</span> - Chi tiết sản phẩm</h4>
          <ProductDetailsComponentNew idProduct={id} />
        </div>
      </div>
    </>

  )
}

export default ProductDetailsPage