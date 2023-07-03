import React, { useState } from 'react'
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from './style'
import InputForm from '../../components/InputForm/InputForm'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import { Image } from 'antd'
import imglogin from '../../assets/images/logo_login.png'
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons'
const SignUpPage = () => {
    const [isShowPassword, setIsShowPassword] = useState(false)
    const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false)
    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#ccc", height: "100vh" }}>
            <div style={{ width: "800px", height: "445px", borderRadius: "6px", backgroundColor: "#fff", display: "flex" }}>
                <WrapperContainerLeft>
                    <h1>Xin chào</h1>
                    <p>Đăng nhập hoặc Tạo tài khoản</p>
                    <InputForm style={{ marginBottom: "10px" }} placeholder="Email" />
                    <div style={{ position: 'relative' }}>
                        <span
                            style={{
                                zIndex: 10,
                                position: 'absolute',
                                top: '4px',
                                right: '8px'
                            }}
                        >{
                                isShowConfirmPassword ? (
                                    <EyeFilled />
                                ) : (
                                    <EyeInvisibleFilled />
                                )
                            }
                        </span>
                        <InputForm placeholder="password" style={{ marginBottom: '10px' }} />
                    </div>
                    <div style={{ position: 'relative' }}>
                        <span
                            style={{
                                zIndex: 10,
                                position: 'absolute',
                                top: '4px',
                                right: '8px'
                            }}
                        >{
                                isShowPassword ? (
                                    <EyeFilled />
                                ) : (
                                    <EyeInvisibleFilled />
                                )
                            }
                        </span>
                        <InputForm placeholder="comfirm password" />
                    </div>
                    <ButtonComponent size={20} style={{
                        backgroundColor: "rgb(255, 172, 10)", color: "white", fontSize: "15px", fontWeight: "500", height: "48px", width: "100%", border: "none", borderRadius: "4px", margin: "26px 0 10px"
                    }}
                        textButton={"Đăng nhập"}>
                    </ButtonComponent>
                    <p>Đã có tài khoản?
                        <WrapperTextLight>Đăng nhập</WrapperTextLight>
                    </p>
                </WrapperContainerLeft>
                <WrapperContainerRight>
                    <Image src={imglogin} preview={false} alt='image login' height="204px" width="203px" />
                    <h4>Mua sắm tại SHOPPUUU</h4>
                </WrapperContainerRight>
            </div>
        </div>
    )
}

export default SignUpPage
