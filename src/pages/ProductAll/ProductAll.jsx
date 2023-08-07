import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDebounce } from '../../hooks/useDebounce'
import * as ProductService from '../../services/ProductService'
import { useQuery } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import CardComponent from '../../components/CardComponent/CardComponent'
import { WrapperButtonMore, WrapperProducts } from '../HomePage/style'
import Loading from '../../components/LoadingComponent/Loading'
import HelmetComponent from '../../components/HelmetComponent/HelmetComponent'


const ProductAll = () => {

    const searchProduct = useSelector((state) => state?.product?.search)
    const searchDebounce = useDebounce(searchProduct, 500)
    const [loading, setLoading] = useState(false)
    const [limit, setLimit] = useState(18)
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
    const navigate = useNavigate()


    const { isLoading, data: products, isPreviousData } = useQuery(['products', limit, searchDebounce], fetchProductAll, { retry: 3, retryDelay: 1000, keepPreviousData: true })

    useEffect(() => {
        fetchAllTypeProduct()
    }, [])

    return (
        <Loading isLoading={isLoading || loading}>
            <HelmetComponent title={'Tất cả sản phẩm'} />
            <div style={{ width: '100%', background: '#efefef', height: 'auto' }}>
                <div style={{ width: '1270px', height: '1000px', margin: '0 auto' }} >
                    <h4><span style={{ cursor: 'pointer', fontWeight: 'bold' }} onClick={() => { navigate('/') }}>Trang chủ</span>  Tất cả sản phẩm</h4>
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

                </div>
            </div>
        </Loading>

    )
}

export default ProductAll
