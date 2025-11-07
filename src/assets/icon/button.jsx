
export const Button = ({
    title = '',
    img = '',
    bg = 'primary-color',
}) => {    
    return (
        <div className={`flex text-white bg-${bg} px-7.5 py-4.5 rounded-[100px] gap-2`}>
            <p>{title}</p>
            <img src={img} alt="img" />
        </div>
    )
}
