import { useReducer } from "react"
import { types } from "../types/types"
import { AuthContext } from "./AuthContex"
import { authReducer } from "./authReducer"




const init = () => {
    const user = JSON.parse(localStorage.getItem('user'))

    return {
        logged: !!user,
        user: user
    }
}
export const AuthProvider = ({ children }) => {

    const [state, dispatch] = useReducer(authReducer, {}, init)

    const Login = (name = '') => {

        const user = {
            id: 'ABC',
            name
        }

        const action = {
            type: types.login,
            payload: user
        }

        localStorage.setItem('user', JSON.stringify(user))
        dispatch(action)
    }

    const Logout = () => {

        localStorage.removeItem('user')
        
        const action = {
            type: types.logout,
        }
        dispatch(action)
    }

    return (
        <AuthContext.Provider value={{
            ...state,
            login: Login,
            logout: Logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}
