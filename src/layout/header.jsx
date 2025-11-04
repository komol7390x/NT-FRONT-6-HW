import { Box, Container, IconButton, Stack } from "@mui/material"
import { Link } from "react-router-dom"
import logo from '../assets/svg/logo.svg'
import { Location } from "../assets/icon/location"

export const Header = () => {
    return (
        <header>
            <Container maxWidth='lg' style={{ border: '1px solid black' }}>
                <Stack direction={'row'} gap={'60px'} py={'32px'} alignItems={'center'}>
                    <IconButton>
                        <Link>
                            <img src={logo} alt="logo" />
                        </Link>
                    </IconButton>
                    <Box>
                        <IconButton>
                            <Location />
                        </IconButton>
                    </Box>
                </Stack>
            </Container>
        </header>
    )
}
