import { SlideIcon } from '../../../assets/icon/slide-icon'
import { ArrowIcon } from '../../../assets/icon/arrow-icon'

export const Slide = () => {
    return (
        <div>
            {/* slide-icon */}
            <div className="absolute -mt-[60px] tablet:px-3 flex items-center justify-between w-full">
                <div className='mobile:mx-auto tablet:mx-0'>
                    <SlideIcon />
                </div>
                <div className="mobile:hidden tablet:block">
                    <ArrowIcon />
                </div>
            </div>
        </div>
    )
}
