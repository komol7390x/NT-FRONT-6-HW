import { Box, Container, Stack } from '@mui/material'
import { COLOR } from '../../config/color'
import gilam1 from '../../assets/png/gilam-1.png'
import gilam2 from '../../assets/png/gilam-2.png'
import { Button } from '../../assets/icon/button'

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
        </>
    )
}
