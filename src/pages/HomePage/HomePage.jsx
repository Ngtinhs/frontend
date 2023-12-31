import React from 'react'
import SliderComponent from '../../components/SliderComponent/SliderComponent'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import { WrapperButtonMore, WrapperProducts, WrapperTopic, WrapperTypeProduct, WrapperTypeProductItems } from './style'
import slider1 from '../../assets/images/1.jpg'
import slider2 from '../../assets/images/2.png'
import slider3 from '../../assets/images/3.jpg'
import slider4 from '../../assets/images/4.jpg'
import slider5 from '../../assets/images/5.jpg'
import topic1 from '../../assets/images/topic1.png'
import topic2 from '../../assets/images/topic2.png'
import topic3 from '../../assets/images/topic3.png'
import CardComponent from '../../components/CardComponent/CardComponent'
import { useQuery } from '@tanstack/react-query'
import * as ProductService from '../../services/ProductService'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import Loading from '../../components/LoadingComponent/Loading'
import { useDebounce } from '../../hooks/useDebounce'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import HelmetComponent from '../../components/HelmetComponent/HelmetComponent'

const HomePage = () => {
  const searchProduct = useSelector((state) => state?.product?.search)
  const searchDebounce = useDebounce(searchProduct, 500)
  const [loading, setLoading] = useState(false)
  const [limit, setLimit] = useState(12)
  const [typeProducts, setTypeProducts] = useState([])

  const fetchProductAll = async (context) => {
    const limit = context?.queryKey && context?.queryKey[1]
    const search = context?.queryKey && context?.queryKey[2]
    const res = await ProductService.getAllProduct(search, limit)

    return res

  }

  const fetchAllTypeProduct = async () => {
    const res = await ProductService.getAllTypeProduct()
    if (res?.status === 'OK') {
      setTypeProducts(res?.data)
    }
  }

  const { isLoading, data: products, isPreviousData } = useQuery(['products', limit, searchDebounce], fetchProductAll, { retry: 3, retryDelay: 1000, keepPreviousData: true })
  const { data: productsnew } = useQuery(['productsnew', searchDebounce], fetchProductAll, { retry: 3, retryDelay: 1000, keepPreviousData: true })
  console.log("productsnew", productsnew)

  useEffect(() => {
    fetchAllTypeProduct()
  }, [])

  const arrImagesTopic = [topic1, topic2, topic3]

  const navigate = useNavigate()
  const handleNavigateAllproduct = () => {
    navigate(`/product-all`)
  }

  return (
    <Loading isLoading={isLoading || loading}>
      <HelmetComponent title={`Trang chủ`} />
      <div style={{ width: '1270px', margin: '0 auto' }}>
        <WrapperTypeProduct>
          {typeProducts.map((item) => {
            return (
              <TypeProduct name={item} key={item} />
            )
          })}
        </WrapperTypeProduct>
      </div>
      <div className='body' style={{ width: '100%', backgroundColor: '#efefef', height: 'auto', paddingBottom: "20px" }}>
        <div id="container" style={{ height: 'auto', width: '1270px', margin: '0 auto' }}>
          <SliderComponent arrImages={[slider1, slider2, slider3, slider4, slider5]} />
          <WrapperTopic>
            {arrImagesTopic.map((image) => {
              return (
                <img key={image} src={image} alt="topic" />
              )
            })}
          </WrapperTopic>
          <div style={{
            textAlign: 'center',
            background: 'none',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: '16px',
            color: 'inherit',
            cursor: "pointer",
            marginTop: "20px"
          }} onClick={handleNavigateAllproduct}>Tất cả sản phẩm</div>
          <WrapperProducts>
            {products?.data?.map((product) => {
              return (
                <CardComponent
                  key={product._id}
                  countInStock={product.countInStock}
                  description={product.description}
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  rating={product.rating}
                  type={product.type}
                  selled={product.selled}
                  discount={product.discount}
                  id={product._id}
                />
              )
            })}
          </WrapperProducts>

          <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
            <WrapperButtonMore
              textbutton={isPreviousData ? 'Load more' : "Xem thêm"} type="outline" styleButton={{
                border: `1px solid ${products?.total === products?.data?.length ? '#f5f5f5' : '#515154'}`, color: `${products?.total === products?.data?.length ? '#f5f5f5' : '#515154'}`,
                width: '240px', height: '38px', borderRadius: '4px'
              }}
              disabled={products?.total === products?.data?.length || products?.totalPage === 1}
              styleTextButton={{ fontWeight: 500, color: products?.total === products?.data?.length && '#fff' }}
              onClick={() => setLimit((prev) => prev + 6)}
            />
          </div>

          <WrapperTypeProductItems>
            {typeProducts.map((item) => (
              <div key={item}>
                <TypeProduct style={{ textAlign: 'center', background: 'none', textTransform: 'uppercase', fontWeight: 'bold', fontSize: '16px', color: 'inherit' }} name={item} />

                <WrapperProducts style={{ display: "flex" }}>
                  {productsnew?.data
                    ?.filter((product) => product.type === item)
                    .map((product) => (
                      <CardComponent
                        key={product._id}
                        countInStock={product.countInStock}
                        description={product.description}
                        image={product.image}
                        name={product.name}
                        price={product.price}
                        rating={product.rating}
                        type={product.type}
                        selled={product.selled}
                        discount={product.discount}
                        id={product._id}
                      />
                    ))}
                </WrapperProducts>
              </div>

            ))}
          </WrapperTypeProductItems>
        </div>
      </div>
    </Loading>
  )
}

export default HomePage 