import { useEffect, useState } from "react";
import * as AiIcons from "react-icons/ai"
import "./footer.scss"
import quotes from "../../data/quotes.json"

function Slider() {

    const [currentSlide, setCurrentSlide] = useState(0)
    const slideLenght = quotes.qoutes.length;

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slideLenght - 1 ? 0 : currentSlide + 1);
    };
    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slideLenght - 1 : currentSlide - 1);
    };


    useEffect(() => {
        setCurrentSlide(0)
    }, [])

    return (
        <div className="slider-container">
            <div className="first-container">
                {quotes.qoutes.map((quote, index) => {
                    return (
                        <div className={index === currentSlide ? "slide current" : "slide"} key={index}>
                            {index === currentSlide && (
                                <div>
                                    <div className="content">
                                        <p>{quote.desc}</p>
                                    </div>
                                    <div className="person">
                                        <p> - {quote.person}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    )
                })}
            </div>

            <div className="second-container">
                <AiIcons.AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
                <AiIcons.AiOutlineArrowRight className="arrow next" onClick={nextSlide} />
            </div>

        </div>
    )
}

export default Slider
