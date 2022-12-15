import React, {useState} from 'react';
import "./_carousel.scss";


const Carousel = () => {

    const [currentIndex, setCurrentIndex] = useState(0)

    const next = () => {
        if (currentIndex < (2)) {
            setCurrentIndex(prevState => prevState + 1)
        }
    }

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        }
    }

    return (
        <div className="carousel-container ">
            <div className="carousel-wrapper">
                <button onClick={prev} className="left-arrow">
                    &lt;
                </button>
                <div className="carousel-content-wrapper">
                    <div className="carousel-content"
                         style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        <section className="slide slide_1">
                            <div className="slide_content">
                                <a href="/Chorwacja" className="slide_button button-option">CHORWACJA 08.2022</a>
                                <p className="slide_text">Dwutygodniowy wyjazd do Chorwacji, gdzie dodatkowo zwiedzilismy takie kraje jak Albania i Czarnogora</p>
                            </div>
                        </section>
                        <section className="slide slide_2">
                            <div className="slide_content">
                                <a className="slide_button button-option">WĘGRY 05.2022</a>
                                <p className="slide_text">Wyjazd do Wegier, spotkanie Adriana z Motopodhaleinfo, Eger, Słowacki Raj.</p>
                            </div>
                        </section>
                        <section className="slide slide_3">
                            <div className="slide_content">
                                <a className="slide_button button-option">BARI WŁOCHY 04.2022</a>
                                <p className="slide_text">Skuterowanie na Kymco 125 przez Bari, Matere i okolice.</p>
                            </div>
                        </section>
                    </div>
                </div>
                <button onClick={next} className="right-arrow">
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default Carousel;


