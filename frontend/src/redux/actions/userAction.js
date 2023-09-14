import axios from 'axios'
import { server } from '../store'

export const loginUser = (email,password) => async (dispatch) => {
    try {
        dispatch({ type: "loginRequest" })

        const config = {
            headers:{
                "Content-Type":"application/json"
            },
            withCredentials:true,
        }

        const { data } = await axios.post(
            `${server}/login`,{email,password},config)

        dispatch({
            type: "loginSuccess",
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: "loginFail",
            payload: error.response.data.message
        })

    }
}
export const loadUser = () => async (dispatch) => {
    try {
        dispatch({ type: "loadUserRequest" })

        const config = {
            withCredentials:true,
        }

        const { data } = await axios.get(
            `${server}/me`,config)

        dispatch({
            type: "loadUserSuccess",
            payload: data.user,
        })
    } catch (error) {
        dispatch({
            type: "loadUserFail",
            payload: error.response.data.message
        })

    }
}
export const LogoutUser = () => async (dispatch) => {
    try {
        dispatch({ type: "logoutRequest" })

        const config = {
            withCredentials:true,
        }

        const { data } = await axios.get(
            `${server}/logout`,config)

        dispatch({
            type: "logoutSuccess",
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: "logoutFail",
            payload: error.response.data.message
        })

    }
}