import { Menu } from 'antd'
import React, { Fragment, useState } from 'react'
import { getItem } from '../../utils';
import { UserOutlined, AppstoreOutlined } from '@ant-design/icons'
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';
import ManageUser from '../../components/Admin/ManageUser/ManageUser';
import ManageProduct from '../../components/Admin/ManageProduct/ManageProduct';

const AdminPage = () => {
    const items = [
        getItem('Người dùng', 'user', <UserOutlined />,
        ),
        getItem('Sản phẩm', 'product', <AppstoreOutlined />)
    ];

    const [keySelected, setKeySelected] = useState('')

    const renderPage = (key) => {
        switch (key) {
            case 'user':
                return (
                    <ManageUser />
                )

            case 'product':
                return (
                    <ManageProduct />
                )

            default: return <Fragment></Fragment>
        }
    }



    const handleOnCLick = ({ key }) => {
        setKeySelected(key)
    }

    return (
        <Fragment>
            <HeaderComponent isHiddenSearch isHiddenCart />
            <div style={{ display: 'flex', }}>
                <Menu
                    mode="inline"
                    style={{
                        width: 256,
                        boxShadow: "1px 1px 2px #ccc",
                        height:
                            '100vh'
                    }}
                    items={items}
                    onClick={handleOnCLick}
                />
                <div style={{ flex: 1, padding: '15px' }}>

                    {renderPage(keySelected)}
                </div>
            </div>
        </Fragment>
    )
}

export default AdminPage