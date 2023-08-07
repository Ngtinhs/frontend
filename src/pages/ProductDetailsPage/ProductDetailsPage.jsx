import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ProductDetailsComponent from '../../components/ProductDetailsComponent/ProductDetailsComponent'
import HelmetComponent from '../../components/HelmetComponent/HelmetComponent'
import * as ProductService from '../../services/ProductService'
import { useQuery } from '@tanstack/react-query'


const ProductDetailsPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const fetchGetDetailsProduct = async (context) => {
    const id = context?.queryKey && context?.queryKey[1]
    if (id) {
      const res = await ProductService.getDetailsProduct(id)
      return res.data
    }

  }

  console.log('fetchGetDetailsProduct', fetchGetDetailsProduct)



  return (
    <>
      <HelmetComponent title={`Chi tiết sản phẩm -`} />
      <div style={{ width: '100%', background: '#efefef', height: '100%' }}>
        <div style={{ width: '1270px', height: '100%', margin: '0 auto' }} >
          <h4><span style={{ cursor: 'pointer', fontWeight: 'bold' }} onClick={() => { navigate('/') }}>Trang chủ</span> - Chi tiết sản phẩm</h4>
          <ProductDetailsComponent fetchGetDetailsProduct={fetchGetDetailsProduct} idProduct={id} />
        </div>
      </div>
    </>

  )
}

export default ProductDetailsPage