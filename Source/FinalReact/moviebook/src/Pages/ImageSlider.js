import React, { useState } from "react";
import '../Css/imageslider.css'
const ImageSlider = (props) => {
    const [currentIndex, setcurrentIndex] = useState(0);

    const slideStyle = {
        width: "100%",
        height: "100%",
        borderRadius: "10px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${props.slides[currentIndex].url})`,
    };
    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? props?.slides?.length - 1 : currentIndex - 1;
        setcurrentIndex(newIndex);
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === props?.slides?.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setcurrentIndex(newIndex);
    }
    return (

        <div className="slider-parent">
            <div style={slideStyle}>
                <div className="image-event-style">
                    <a class="carousel-control-prev" onClick={goToPrevious} href="#carouselExampleControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only ">Previous</span>
                    </a>
                    <a class="carousel-control-next" onClick={goToNext} href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only" >Next</span>
                    </a>
                </div>
            </div>
        </div>
    );
}
export default ImageSlider;


// <div className="slider-parent">
//             <div style={slideStyle}>
//                 <div className="image-event-style">
//                     <div className="previous-div">
//                         <button className="preview-btn-style" onClick={goToPrevious}>Preview</button>
//                     </div>
//                     <div className="next-div">
//                         <button className="preview-btn-style" onClick={goToNext}>Next</button>
//                     </div>
//                 </div>
//             </div>
//         </div>



// <a class="carousel-control-prev" onClick={goToPrevious} href="#carouselExampleControls" role="button" data-slide="prev">
//                         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//                         <span class="sr-only ">Previous</span>
//                     </a>
//                     <a class="carousel-control-next" onClick={goToNext} href="#carouselExampleControls" role="button" data-slide="next">
//                         <span class="carousel-control-next-icon" aria-hidden="true"></span>
//                         <span class="sr-only" >Next</span>
//                     </a>