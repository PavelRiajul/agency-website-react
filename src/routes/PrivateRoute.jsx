

import { Navigate } from 'react-router'
import { useAuth } from '../context/AuthContext'

const PrivateRoute = ({children}) => {

    const {user} = useAuth()

    return user ? children : <Navigate to="/login"/>
  
}

export default PrivateRoute