import Cookies from 'js-cookie'
import { Navigate } from 'react-router-dom'

export const ProfileLayout = () => {
    const token = Cookies.get('token')
    if (!token) {
        return <Navigate to={'/auth'} />
    }

    return (
        <div>
            Profile
        </div>
    )
}
