import React from 'react'
import { Badge, Col } from 'antd';
import { WrapperHeader, WrapperHeaderAccount, WrapperTextHeader, WrapperTextHeaderSmall } from './style';
import {
    UserOutlined,
    CaretDownOutlined,
    ShoppingCartOutlined
} from '@ant-design/icons';
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const HeaderComponent = () => {
    const navigate = useNavigate()
    const user = useSelector((state) => state.user)
    const handleNavigationLogin = () => {
        navigate('/sign-in');
    }
    return (
        <div style={{ width: "100%", background: "#ffd400", display: "flex", justifyContent: "center" }}>
            <WrapperHeader >
                <Col span={5}>
                    <WrapperTextHeader>
                        SHOPPUUU
                    </WrapperTextHeader>
                </Col>
                <Col span={13}>
                    <ButtonInputSearch
                        size="large"
                        textButton="Tìm kiếm"
                        placeholder="Tìm kiếm sản phẩm ... "
                    />
                </Col>
                <Col span={6} style={{ display: "flex", gap: "54px", alignItems: "center" }}>
                    <WrapperHeaderAccount>
                        <UserOutlined style={{ fontSize: "30px" }} />
                        {user?.name ? (
                            <div style={{ cursor: 'pointer' }}>{user.name}</div>
                        ) : (
                            <div onClick={handleNavigationLogin} style={{ cursor: 'pointer' }}>
                                <WrapperTextHeaderSmall>Đăng nhập / Đăng ký</WrapperTextHeaderSmall>
                                <div>
                                    <WrapperTextHeaderSmall>Tài khoản</WrapperTextHeaderSmall>
                                    <CaretDownOutlined />
                                </div>
                            </div>
                        )}
                    </WrapperHeaderAccount>
                    <div>
                        <Badge count={1} size='small'>
                            <ShoppingCartOutlined style={{ fontSize: "25px", color: '#fff' }} />
                        </Badge>
                        <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
                    </div>
                </Col>
            </WrapperHeader>
        </div>
    )
}

export default HeaderComponent
