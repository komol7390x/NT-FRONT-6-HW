import { Link } from "react-router-dom"
import { ProductCart } from "../../../components/product-cart"
import { productData } from "../../../data/product-data"
import { Button } from "../../../assets/icon/button"


export const Category = () => {
    return (
        <div className='container'>
            <div className='w-full mx-auto text-center mt-44'>
                <p className="text-[36px] font-third-family text-primary-green-light">Categories </p>
                <h3 className="font-extrabold text-[50px]">Our Products</h3>

                <div className="grid grid-cols-4">
                    {productData.slice(0, 8).map((item) => (
                        <Link to={`product/${item.id}`}>
                            <ProductCart name={item.name} img={item.img}
                                key={item.id} price={item.price} type={item.type} />
                        </Link>
                    ))}
                </div>

                <div className="inline-block mt-[122px]">
                    <Button title="Lead More" icon={true} bg="#274C5B" textColor="white" />
               </div>
            </div>
        </div>
    )
}
