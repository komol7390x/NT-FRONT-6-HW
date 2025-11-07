import { useMediaQuery } from '@uidotdev/usehooks'
import logo from '../../assets/svg/logo.svg'
import menu from '../../assets/svg/menu-bar.svg'
import { PcNavbar } from './header-components/pc-navbar'
import { manuData } from './data/menuData'
import { DarkButton } from '../../assets/icon/dark-button'
import { Button } from '../../assets/icon/button'
import login from '../../assets/svg/login.svg'
import { Link } from 'react-router-dom'

export const Header = () => {
  const pc = useMediaQuery('(min-width:1240px)')
  console.log(pc);

  return (
    <div className="container">
      <div className='flex justify-between items-center py-5 gap-5'>
        {/* logo */}
        <img src={logo} alt="logo" />

        {/* Novbar */}
        <div className='mobile:hidden pc:block'>
          <PcNavbar items={manuData} />
        </div>

        {/* Button */}
        <div className='mobile:hidden pc:block'>
          <div className='flex items-center gap-x-6'>
            <a href="tel:+998935720473" className='font-semibold hover:text-primary-color'>+998 93 572-04-73</a>
            <div className='text-grey-color cursor-pointer hover:text-primary-color'>
              <DarkButton />
            </div>
            <Link to={'login'}><Button title='Login' img={login} /></Link>
          </div>
        </div>

        {/* menu button */}
        <img src={menu} alt="menu" className='pc:hidden' />
      </div>
    </div>
  )
}
