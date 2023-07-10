import axios from "axios"

export const loginUser = async (data) => {
    const res = await axios.post('/user/sign-in', data)
    return res.data
}

export const SignupUser = async (data) => {
    const res = await axios.post('/user/sign-up', data)
    return res.data
}

export const getDetailsUser = async (id, access_token) => {
    const res = await axios.get(`/user/get-details/${id}`, {
        headers: {
            token: `Beare ${access_token}`,
        }
    })
    return res.data
}