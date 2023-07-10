import React, { Fragment, useEffect, useState } from 'react'
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
import jwt_decode from 'jwt-decode'
import { useDispatch } from 'react-redux'
import { updateUser } from '../../redux/slices/userSlice'

const SignInPage = () => {
    const [isShowPassword, setIsShowPassword] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    const disable = !email.length || !password.length;

    const handleOnchangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleOnchangePassword = (e) => {
        setPassword(e.target.value)
    }
    const Navigate = useNavigate()


    const mutation = useMutationHooks(
        data => UserService.loginUser(data)
    )

    const { data, isLoading, isSuccess } = mutation
    useEffect(() => {
        if (isSuccess) {
            Navigate('/')
            localStorage.setItem('access_token', data?.access_token)
            if (data?.access_token) {
                const decoded = jwt_decode(data?.access_token)
                if (decoded?.id) {
                    handleGetDetailsUser(decoded?.id, data?.access_token)
                }
            }
        }
    }, [isSuccess])

    const handleGetDetailsUser = async (id, token) => {
        const res = await UserService.getDetailsUser(id, token)
        dispatch(updateUser({ ...res?.data, access_token: token }))
        console.log("res: ", res)

    }



    console.log("mutation", mutation)

    const handleNavigationSignUp = () => {
        Navigate('/sign-up')
    }

    const handleSignIn = () => {
        mutation.mutate({
            email,
            password,
        })
    }
    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#ccc", height: "100vh" }}>
            <div style={{ width: "800px", height: "445px", borderRadius: "6px", backgroundColor: "#fff", display: "flex" }}>
                <WrapperContainerLeft>
                    <h1>Xin chào</h1>
                    <p>Đăng nhập hoặc Tạo tài khoản</p>
                    <InputForm style={{ marginBottom: "10px" }} placeholder="Email" value={email} onChange={handleOnchangeEmail} />
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
                        <InputForm placeholder="password" type={isShowPassword ? "text" : "password"} value={password} onChange={handleOnchangePassword} />
                    </div>
                    <>
                        {data?.status === 'ERR' && <span style={{ color: "red" }}>{data?.message}</span>}
                    </>
                    <Loading isLoading={isLoading}>
                        <ButtonComponent
                            onClick={handleSignIn}
                            disabled={disable}
                            size={20}
                            style={{
                                backgroundColor: disable ? "#ccc" : "rgb(255, 172, 10)",
                                color: "white", fontSize: "15px",
                                fontWeight: "500", height: "48px",
                                width: "100%",
                                border: "none",
                                borderRadius: "4px",
                                margin: "26px 0 10px"
                            }}
                            textButton={"Đăng nhập"}>
                        </ButtonComponent>
                    </Loading>
                    <p><WrapperTextLight>
                        Quên mật khẩu?
                    </WrapperTextLight></p>
                    <p>Chưa có tài khoản?
                        <WrapperTextLight onClick={handleNavigationSignUp}>Tạo tài khoản</WrapperTextLight>
                    </p>
                </WrapperContainerLeft>
                <WrapperContainerRight>
                    <Image src={imglogin}
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

export default SignInPage
