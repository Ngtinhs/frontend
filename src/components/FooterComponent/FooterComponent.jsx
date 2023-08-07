import React from 'react'
import { WrapperFooter } from './style'
import { Col, Row } from 'antd'

const FooterComponent = () => {
    return (
        <WrapperFooter>
            <Row justify="center">
                <Col span={24} style={{ textAlign: 'center' }}>
                    <p>&copy; 2023 SHOPPUU. All rights reserved.</p>
                </Col>
            </Row>
        </WrapperFooter>
    )
}

export default FooterComponent
