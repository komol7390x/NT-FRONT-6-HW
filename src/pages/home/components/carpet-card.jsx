import { Box, Typography } from '@mui/material'
import { COLOR } from '../../../config/color'
import { Heart } from '../../../assets/icon/heart'
import { Star } from '../../../assets/icon/star'

export const CarpetCard = ({ img, title, carpet_h, carpet_w, state, comment, price, installment, sales = 'Новинка' }) => {
  return (
    <Box style={{ border: '1px solid #FCFCFC' }} boxShadow={'0 0 10px 0 rgba(0, 0, 0, 0.1)'} bgcolor={'#FCFCFC'} position={'relative'} borderRadius={'10px'} >
      <Box display={'flex'} justifyContent={'space-between'} gap={'73px'} mt={'20px'} position={'absolute'}>
        <Typography bgcolor={COLOR.primary} display={'inline-flex'} width={'114px'} pl={'20px'} alignItems={'center'} color={COLOR.white}>{sales}</Typography>
        <Box sx={{ color: COLOR.grey }} pl={'-20px'}>
          <Heart />
        </Box>
      </Box>

      <Box mt={'70px'} px={'28px'}>
        <img src={img} alt={title} width={'170px'} />
      </Box>
      <Box pl={'20px'}>
        <h3 style={{ fontWeight: '500', fontSize: '18px' }}>{title}</h3>
        <p style={{ marginTop: '-15px', fontSize: '14px' }}>Размер: {carpet_h}x{carpet_w}</p>
        <p style={{ fontSize: '14px' }}>Производитель: {state}</p>

        {/* Stars */}
        <Box display={'flex'} alignItems={'baseline'} gap={'8px'}>
          <Box display={'flex'} gap={'5px'}>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </Box >
          <p style={{ color: COLOR.grey, marginTop: '-15px' }}>{comment} отзывов</p>
        </Box>

        {/* Price */}
        <Box display={'flex'} gap={'13px'} alignItems={'center'}>
          <Box>
            <h3 style={{ fontSize: '14px', color: COLOR.grey, fontWeight: '400' }}>Цена</h3>
            <p style={{ fontSize: '18px' }}>{price} T</p>
          </Box>
          <Box>
            <h3 style={{ fontSize: '14px', color: COLOR.grey, fontWeight: '400' }}>В рассрочку</h3>
            <p style={{ background: COLOR.primary, textAlign: 'center', color: COLOR.white }}>{installment} T x 12</p>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
