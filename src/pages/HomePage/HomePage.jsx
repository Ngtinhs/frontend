import React from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import { WrapperButtonMore, WrapperProducts, WrapperTypeProduct } from './style'
import SliderComponent from '../../components/SliderComponent/SliderComponent'
import hinh1 from '../../assets/images/hinh1.png'
import hinh2 from '../../assets/images/hinh2.png'
import hinh3 from '../../assets/images/hinh3.png'
import CardComponent from '../../components/CardComponent/CardComponent'
const HomePage = () => {
    const arr = ['TV', 'TV2', 'TV']
    return (
        <div>
            <div style={{ padding: '0 120px' }}>
                <WrapperTypeProduct>
                    {arr.map((item) => {
                        return <TypeProduct key={item} name={item} />
                    })}
                </WrapperTypeProduct>
            </div>
            <div id='container' style={{ backgroundColor: "#efefef", padding: '0 120px', height: "2000px" }}>
                <SliderComponent arrImages={[hinh1, hinh2, hinh3]} />
                <WrapperProducts>
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                </WrapperProducts>
                <div style={{ width: "100%", display: "flex", justifyContent: "center", marginTop: "10px" }}>
                    <WrapperButtonMore textButton="Xem thêm" type="outline" style={{
                        border: "1px solid #ffd400",
                        width: "240px", height: "38px", borderRadius: "5px",
                    }} />
                </div>
            </div>
        </div>

    )
}

export default HomePage
