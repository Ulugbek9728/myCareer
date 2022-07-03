import React, {useState} from 'react';
import FifthTemplateResume from "../../resumeTemplates/FifthTemplateResume";
import Slider from "react-slick/lib";
import {useDispatch} from "react-redux";
import ThirdTemplateResume from "../../resumeTemplates/ThirdTemplateResume";
import FirstTemplateResume from "../../resumeTemplates/FirstTemplateResume";
import {Button} from "react-bootstrap";
import {setResumeNumber, showTemplates, signedWizardNextSteps} from "../../../actions/careerAction";

function CompRezume(props) {

    const [slideIndex, setSlideIndex] = useState(0);
    const [updateCount, SetUpdateCount] = useState(0);
    const dispatch = useDispatch();

    const settings = {
        dots: false,
        autoplay: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        afterChange: () =>
            SetUpdateCount(updateCount + 1),
        beforeChange: (current, next) => (setSlideIndex(next))
    };


    return (
        <>

                <div className="slider-box">

                </div>

        </>
    );
}

export default CompRezume;