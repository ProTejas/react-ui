import React from 'react';
import bannerImg from '../../assets/img/banner-img.svg';
import rightArrow from '../../assets/img/right-arrow-svg.svg';
import './banner.css'
function Banner() {
    return (
        <div className='banner'>
            <div className="banner-content">
                <h1>Lorem ipsum</h1>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore
                    magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                    et justo duo dolores et ea rebum. Stet clita kasd</p>
                <div className="banner-more-btn">
                    <button className='banner-btn'>Know More <img src={rightArrow} alt="" /></button>
                </div>
            </div>
            <div className="banner-img">
                <img src={bannerImg} alt="Banner image" />
            </div>

        </div>
    )
}

export default Banner
