import { dataMost } from "../data/data"
import { Card } from "./card"

export const Book = () => {
    return (
        <div className="flex">
            {dataMost.map((item) => (
                <Card title={item.title} img={item.img} />
            ))}
        </div>
    )
}
