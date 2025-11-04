import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { Header } from './header'

export const MainLayout = () => {
    return (
        <>
            <Box>
                <Header />
                <Outlet />
            </Box>
        </>
    )
}
