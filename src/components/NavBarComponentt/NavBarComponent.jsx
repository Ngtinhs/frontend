import { Checkbox, Col, Rate, Row } from 'antd'
import React, { useEffect } from 'react'
import { WrapperContent, WrapperLableText, WrapperTextPrice, WrapperTextValue } from './style'
import * as ProductService from '../../services/ProductService'
import { useQuery } from '@tanstack/react-query'
import TypeProduct from '../TypeProduct/TypeProduct'


const NavBarComponent = () => {

    const fetchAllTypeProduct = async () => {
        const res = await ProductService.getAllTypeProduct()
        if (res?.status === 'OK') {
            return res.data
        }
        return res.data
    }


    useEffect(() => {
        fetchAllTypeProduct()
    }, [])
    const { data: products } = useQuery(['products'], fetchAllTypeProduct, { retry: 3, retryDelay: 1000 })

    console.log('products', products)


    console.log("fetchAllTypeProduct", fetchAllTypeProduct)
    return (
        <div>
            <WrapperLableText>DANH MỤC SẢN PHẨM</WrapperLableText>
            <WrapperContent>
                {products?.map((option) => {
                    return (
                        <TypeProduct name={option} key={option} />
                    )
                })}
            </WrapperContent>
        </div>
    )
}

export default NavBarComponent