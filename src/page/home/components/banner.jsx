import car from '../../../assets/png/car.png';

export const Banner = () => {
    return (
        <div className="w-[358px] h-[300px] bg-cover bg-center relative" style={{ backgroundImage: `url(${car})` }}>
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="absolute inset-0 pt-10 text-white px-5 text-center z-3">
                <h3 className="font-semibold text-[24px]">Compact cars</h3>
                <p>Rent cars as you are comfortable and where you are comfortable.</p>
            </div>
        </div>
    );
};
