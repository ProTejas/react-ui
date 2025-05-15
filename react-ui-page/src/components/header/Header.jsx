import React from 'react'
import './header.css';
function Header() {
    return (
        <>
            <header className="header">
                <div className='header-left'>
                    <p className="logo">
                        LOGO
                    </p>
                </div>
                <div className='heder-right'>
                    <div className='header-nav'>
                        <nav>
                            <ul>
                                <li>Qualifications</li>
                                <li>Organizations</li>
                                <li>Research & Analysis</li>
                                <li>Lorem ipsum</li>
                                <li>Lorem ipsum</li>
                            </ul>
                        </nav>
                    </div>
                    <div className='header-search'>
                        <div className="search-icon">
                            <img src="" alt="" srcset="" />
                        </div>
                    </div>
                    <div className='header-btns'>
                        <button className='header-btn'>Enrolment</button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
