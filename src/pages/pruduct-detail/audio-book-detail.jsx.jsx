import { useParams } from "react-router-dom"
import { audioBookData } from "../home/data/audioBook"
import { BookPage } from "./components/book-page"

export const AudioBookDetail = () => {
    const { id } = useParams()
    const book = audioBookData.find((item) => item.id == 1)
    return (
        <div className="container">
            <div>
                {book && (
                    <BookPage
                        img={book.img}
                        title={book.title}
                        genre={book.ganre}
                        desc={book.desc}
                        star={book.star}
                        comment={book.comment}
                        author={book.author}
                        publisher={book.publisher}
                        year={book.year}
                        bookPrice={book.bookPrice}
                        audioPrice={book.audioPrice}
                        onlineBookPrice={book.onlineBookPrice}
                        ISBN={book.info?.ISBN}
                        lang={book.info?.lang}
                        pages={book.info?.pages}
                        publisherYear={book.info?.publisherYear}
                    />
                )}

            </div>
        </div>
    )
}
