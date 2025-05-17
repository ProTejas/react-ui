import React from 'react'
import './footer.css'
import Facebook from '../../assets/img/facebook-icon.svg'
import Instagram from '../../assets/img/instagram-icon.svg'
import Linkdin from '../../assets/img/linkdin-icon.svg'
import YouTube from '../../assets/img/youtube-icon.svg'
import Quera from '../../assets/img/quora-icon.svg'
import Twitter from '../../assets/img/tweeter-icon.svg'

function Footer() {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="footer-wrap">
                        {/* Left: Contact */}
                        <div className="footer-contact">
                            <h3>Contact us</h3>
                            <p>Address: amet, consetetur sadipscing elitr, sed diam</p>
                            <p>Email id: eirmod tempor invidunt ut labore et dolore</p>
                            <p>Phone no: 123456789</p>
                        </div>

                        {/* Center: Social Icons */}
                        <div className="footer-social">
                            <h3>Follow us</h3>
                            <div className="social-icons">
                                <img src={Facebook} alt="Facebook" />
                                <img src={Linkdin} alt="LinkedIn" />
                                <img src={Instagram} alt="Instagram" />
                                <img src={Twitter} alt="Twitter" />
                                <img src={YouTube} alt="YouTube" />
                                <img src={Quera} alt="Quora" />
                            </div>
                        </div>

                        {/* Right: Head Office */}
                        <div className="footer-office">
                            <h3>Head Office</h3>
                            <ul>
                                <li><span>📍</span> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</li>
                                <li><span>📄</span> Lorem ipsum dolor sit amet, consetetur sadipscing elitr</li>
                                <li><span>📄</span> Lorem ipsum dolor sit amet, consetetur sadipscing elitr</li>
                                <li><span>🚌</span> Lorem ipsum asd asdsaweeq Lorem Ipsum</li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>© 2021 All Rights Reserved. Privacy Policy</p>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer
