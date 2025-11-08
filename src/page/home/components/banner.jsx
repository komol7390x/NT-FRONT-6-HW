import car from '../../../assets/png/car.png';

export const Banner = () => {
    return (
        <div className="min-h-[300px] relative">
            <img src={car} alt="car" className='object-center object-cover min-h-[300px] tablet:h-[500px] w-full' />
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="absolute inset-0 text-white top-0 mx-auto mt-3 text-center w-[386px] z-3  pc:mt-10">
                <h3 className="font-semibold text-[24px] tablet:text-[36px]">Compact cars</h3>
                <p className='items-center font-normal text-[12px] tablet:text-[16px]'>Rent cars as you are comfortable and where you are comfortable.</p>
            </div>
        </div>
    );
};
