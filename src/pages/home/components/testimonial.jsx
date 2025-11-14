import bg from '../../../assets/img/testimonial.png'

export const Testimonial = () => {
    return (
        <div className='max-w-[1920px] mx-auto mt-50 relative'>
            <img src={bg} alt="bg" />
            <div className="absolute container text-center py-20 top-0 left-1/2 transform -translate-x-1/2 border">
                <h1>Komol</h1>
            </div>
        </div>
    )
}
