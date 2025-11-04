import { Badge, Box, Container, Stack, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import logo from '../assets/svg/logo.svg'
import { Location } from "../assets/icon/location"
import { CustomButton, CustomIconButton, SearchInput } from "./style"
import { Avatar } from "../assets/icon/avatar"
import { Heart } from "../assets/icon/heart"
import { Cart } from "../assets/icon/cart"
import { SearchIcon } from "../assets/icon/searchIcon"

export const Header = () => {
    return (
        <header>
            <Container maxWidth='lg'>

                <Stack direction={'row'} gap={'60px'} py={'32px'} alignItems={'center'}>

                    <CustomButton>
                        <Link>
                            <img src={logo} alt="logo" />
                        </Link>
                    </CustomButton>

                    <Box display={'inline-flex'} alignItems={'center'}>
                        <CustomButton>
                            <Location />
                        </CustomButton>
                        <Typography fontSize={18}>
                            Алматы
                        </Typography>
                    </Box>

                    <Box flexGrow={1} position={'relative'}>
                        <SearchInput placeholder="Поиск по товарам">
                            {/* <CustomIconButton>
                                <SearchIcon />
                            </CustomIconButton> */}
                        </SearchInput>
                    </Box>

                    <Stack direction={'row'} gap={'48px'}>
                        <CustomButton>
                            <Badge>
                                <Avatar />
                            </Badge>
                        </CustomButton>

                        <CustomButton>
                            <Badge badgeContent={5} color='error'>
                                <Heart />
                            </Badge>
                        </CustomButton>

                        <CustomButton>
                            <Badge badgeContent={2} color='error'>
                                <Cart />
                            </Badge>
                        </CustomButton>

                    </Stack>

                </Stack>

                <Stack my={'30px'}>
                    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} color={'black'}>
                        <Link style={{ textDecoration: 'none' }} >
                            <Typography color="black"  >Ковры</Typography>
                        </Link>

                        <Link style={{ textDecoration: 'none' }}>
                            <Typography color="black"  >Коврики</Typography>
                        </Link>

                        <Link style={{ textDecoration: 'none' }}>
                            <Typography color="black"  >Для ванной</Typography>
                        </Link>

                        <Link style={{ textDecoration: 'none' }}>
                            <Typography color="black"  >Дорожки</Typography>
                        </Link>

                        <Link style={{ textDecoration: 'none' }}>
                            <Typography color="black"  >Особенные ковры</Typography>
                        </Link>

                        <Link style={{ textDecoration: 'none' }}>
                            <Typography color="black"  >Центр поддержки</Typography>
                        </Link>

                        <Link style={{ textDecoration: 'none' }}>
                            <Typography color="black"  >Контакты</Typography>
                        </Link>
                    </Box>
                </Stack>

            </Container>
        </header>
    )
}
