import React from 'react';

function AnimeCarusel(props) {
    return (
        <div className={"anime-carousel-wrapper"}>
            <div className="anime-carousel">
                <div className="marquee">
                    <div className="marquee--inner">
                            <span>
                                <div className="orb"><img src="./images/first-resume.png" alt=""/></div>
                                <div className="orb"><img src="./images/second-resume.png" alt=""/></div>
                                <div className="orb"><img src="./images/third-resume.png" alt=""/></div>
                                <div className="orb"><img src="./images/fourth-resume.png" alt=""/></div>
                                <div className="orb"><img src="./images/fifth-resume.png" alt=""/></div>
                                <div className="orb"><img src="./images/sixth-resume.png" alt=""/></div>
                                <div className="orb"><img src="./images/first-resume.png" alt=""/></div>
                            </span>
                        <span>
                                <div className="orb"><img src="./images/sixth-resume.png" alt=""/></div>
                                <div className="orb"><img src="./images/fifth-resume.png" alt=""/></div>
                                <div className="orb"><img src="./images/fourth-resume.png" alt=""/></div>
                                <div className="orb"><img src="./images/third-resume.png" alt=""/></div>
                                <div className="orb"><img src="./images/first-resume.png" alt=""/></div>
                                <div className="orb"><img src="./images/second-resume.png" alt=""/></div>
                                <div className="orb"><img src="./images/first-resume.png" alt=""/></div>
                            </span>
                    </div>
                </div>
            </div>
            <div className="anime-carousel anime-carousel-second">
                <div className="marquee">
                    <div className="marquee--inner">
                            <span>
                                <div className="orb"><img src="./images/first-resume.png" alt=""/></div>
                                <div className="orb"><img src="./images/second-resume.png" alt=""/></div>
                                <div className="orb"><img src="./images/third-resume.png" alt=""/></div>
                                <div className="orb"><img src="./images/fourth-resume.png" alt=""/></div>
                                <div className="orb"><img src="./images/fifth-resume.png" alt=""/></div>
                                <div className="orb"><img src="./images/sixth-resume.png" alt=""/></div>
                                <div className="orb"><img src="./images/first-resume.png" alt=""/></div>
                            </span>
                        <span>
                                <div className="orb"><img src="./images/sixth-resume.png" alt=""/></div>
                                <div className="orb"><img src="./images/fifth-resume.png" alt=""/></div>
                                <div className="orb"><img src="./images/fourth-resume.png" alt=""/></div>\
                                <div className="orb"><img src="./images/third-resume.png" alt=""/></div>
                                <div className="orb"><img src="./images/first-resume.png" alt=""/></div>
                                <div className="orb"><img src="./images/second-resume.png" alt=""/></div>
                                <div className="orb"><img src="./images/first-resume.png" alt=""/></div>
                            </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AnimeCarusel;