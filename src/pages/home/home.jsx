import { Box, Container, Stack } from '@mui/material'
import { COLOR } from '../../config/color'
import gilam1 from '../../assets/png/gilam-1.png'
import gilam2 from '../../assets/png/gilam-2.png'
import { Button } from '../../assets/icon/button'
import { CarpetData } from '../../data/carpet-data'
import { Link } from 'react-router-dom'
import { Arrows } from '../../assets/icon/arrows'
import { CarpetCard } from './components/carpet-card'


export const Home = () => {
    return (
        <>
            <Stack bgcolor={COLOR.primary} mb={'100px'}>
                <Container>
                    <Box display={'flex'} py={'100px'} justifyContent={'space-between'} px={'78px'} gap={'70px'}>
                        <Box mt={'50px'}>
                            <h1 style={{ color: '#F9F9F9', fontSize: '45px' }}>Новая коллекция ковров Venetta</h1>
                            <Button text='Смотреть все' />
                        </Box>

                        <Box display={'flex'} >
                            <img src={gilam1} alt="gilam1" />
                            <img src={gilam2} alt="gilam2" />
                        </Box>
                    </Box>
                </Container>
            </Stack >

            <Container style={{ border: '1px solid black' }}>
                <Stack>
                    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                        <Box display={'flex'} alignItems={'center'} gap={'32px'}>
                            <h3 style={{ fontSize: '40px' }}>Новинки</h3>
                            <Link style={{ color: COLOR.primary }}>Все новинки</Link>
                        </Box>
                        <Arrows />
                    </Box>
                    <Box style={{ display: 'flex' }}>
                        {CarpetData.map((item) => (
                            <div>
                                <CarpetCard title={item.title} img={item.img} carpet_h={item.carpet_h}
                                    carpet_w={item.carpet_w} state={item.state} comment={item.comment} price={item.price} />
                            </div>
                        ))}
                    </Box>
                </Stack>
                <Stack></Stack>
            </Container>
        </>
    )
}
