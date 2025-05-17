import React from 'react'
import rightArrow from '../../assets/img/right-arrow-svg.svg';
import newsLatterRightImg from '../../assets/img/news-latter-img.svg';
import './news-latter.css'
function NewsLatter() {
    return (
        <>
            <div className="news-latter">
                <div className="container">
                    <div className="news-latter-containt">
                        <div>
                            <h2>
                                Subscribe
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                            </p>
                            <div className="news-latter-email-input">
                                <input type="email" />
                                <button>
                                    Subscribe Now
                                    <img src={rightArrow} alt="subscribe-button" />
                                </button>
                            </div>
                        </div>
                        <div className='news-latter-right-img'>
                            <img src={newsLatterRightImg} alt="news-latter" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsLatter
