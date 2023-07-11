import React, { useEffect, useState } from 'react'
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from './style'
import InputForm from '../../components/InputForm/InputForm'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import { Image } from 'antd'
import imglogin from '../../assets/images/logo_login.png'
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import * as UserService from '../../services/UserService'
import { useMutationHooks } from '../../hooks/useMutationHook'
import Loading from '../../components/LoadingComponent/Loading'
import * as messages from '../../components/Message/Message'
const SignUpPage = () => {
    const [isShowPassword, setIsShowPassword] = useState(false)
    const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const disable = !email.length || !password.length || !confirmPassword.length;

    const handleOnchangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleOnchangePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleOnchangeConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
    }
    const Navigate = useNavigate()

    const mutation = useMutationHooks(
        data => UserService.SignupUser(data)
    )
    const { data, isLoading, isSuccess, isError } = mutation

    useEffect(() => {
        if (isSuccess) {
            messages.success()
            handleNavigationSignIn()
        } else if (isError) {
            messages.error()
        }
    }, [isSuccess, isError])


    const handleNavigationSignIn = () => {
        Navigate('/sign-in')
    }

    const handleSignUp = () => {
        mutation.mutate({
            email,
            password,
            confirmPassword
        })
    }
    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#ccc", height: "100vh" }}>
            <div style={{ width: "800px", height: "445px", borderRadius: "6px", backgroundColor: "#fff", display: "flex" }}>
                <WrapperContainerLeft>
                    <h1>Xin chào</h1>
                    <p>Đăng nhập hoặc Tạo tài khoản</p>
                    <InputForm
                        style={{ marginBottom: "10px" }}
                        placeholder="Email"
                        value={email}
                        onChange={handleOnchangeEmail}
                    />
                    <div style={{ position: 'relative' }}>
                        <span
                            onClick={() => {
                                setIsShowPassword(!isShowPassword)
                            }}
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
                        <InputForm
                            placeholder="password"
                            style={{ marginBottom: '10px' }}
                            type={isShowPassword ? "text" : "password"}
                            value={password}
                            onChange={handleOnchangePassword} />
                    </div>
                    <div style={{ position: 'relative' }}>
                        <span
                            onClick={() => {
                                setIsShowConfirmPassword(!isShowConfirmPassword)
                            }}
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
                        <InputForm placeholder="comfirm password" type={isShowConfirmPassword ? "text" : "password"} value={confirmPassword} onChange={handleOnchangeConfirmPassword} />
                    </div>
                    <>
                        {data?.status === 'ERR' && <span style={{ color: "red" }}>{data?.message}</span>}
                    </>
                    <Loading isLoading={isLoading}>
                        <ButtonComponent
                            disabled={disable}
                            onClick={handleSignUp}
                            size={40}
                            style={{
                                backgroundColor: disable ? "#ccc" : "rgb(255, 172, 10)",
                                color: "white",
                                fontSize: "15px",
                                fontWeight: "500",
                                height: "48px",
                                width: "100%",
                                border: "none",
                                borderRadius: "4px",
                                margin: "26px 0 10px"
                            }}
                            textButton={"Đăng ký"}>
                        </ButtonComponent>
                    </Loading>
                    <p>Đã có tài khoản?
                        <WrapperTextLight onClick={handleNavigationSignIn}>Đăng nhập</WrapperTextLight>
                    </p>
                </WrapperContainerLeft>
                <WrapperContainerRight>
                    <Image
                        src={imglogin}
                        preview={false}
                        alt='image login'
                        height="204px"
                        width="203px" />
                    <h4>Mua sắm tại SHOPPUUU</h4>
                </WrapperContainerRight>
            </div>
        </div>
    )
}

export default SignUpPage
