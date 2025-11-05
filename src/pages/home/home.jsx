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

            <Container>
                <Stack>
                    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                        <Box display={'flex'} alignItems={'baseline'} gap={'32px'}>
                            <h3 style={{ fontSize: '40px' }}>Новинки</h3>
                            <Link style={{ color: COLOR.primary, fontSize: '18px', fontWeight: 400 }}>Все новинки</Link>
                        </Box>
                        <Arrows />
                    </Box>
                    <Box style={{ display: 'flex' }} justifyContent={'space-between'} mb={'100px'}>
                        {CarpetData.map((item) => (
                            <div>
                                <CarpetCard title={item.title} img={item.img} carpet_h={item.carpet_h}
                                    carpet_w={item.carpet_w} state={item.state} comment={item.comment}
                                    price={item.price} installment={item.installment} />
                            </div>
                        ))}
                    </Box>
                </Stack>

                <Stack>
                    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                        <Box display={'flex'} alignItems={'baseline'} gap={'32px'}>
                            <h3 style={{ fontSize: '40px' }}>Скидки</h3>
                            <Link style={{ color: COLOR.primary, fontSize: '18px', fontWeight: 400 }}>Все скидки</Link>
                        </Box>
                        <Arrows />
                    </Box>
                    <Box style={{ display: 'flex' }} justifyContent={'space-between'} mb={'100px'}>
                        {CarpetData.map((item) => (
                            <div>
                                <CarpetCard title={item.title} img={item.img} carpet_h={item.carpet_h}
                                    carpet_w={item.carpet_w} state={item.state} comment={item.comment}
                                    price={item.price} installment={item.installment} sales='-20%' />
                            </div>
                        ))}
                    </Box>
                </Stack>
                <Stack></Stack>
            </Container>
        </>
    )
}
