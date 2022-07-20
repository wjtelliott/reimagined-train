import * as React from 'react';
import { removeLinkStyle } from './StylePresets';

const Header = ({showNavMenu}) => {

    const headerStyle = {
        alignItems: 'center'
    }

    return (
        <header className='bg-dark w-100 py-1 d-flex flex-wrap justify-content-center media-sticky-top' style={headerStyle}>
            {/* <a href='/' className='d-inline-block m-2'><img src='/logo.png' className='rounded-circle w-75 media-remove'/></a> */}
            <div className='d-inline container align-top w-25 media-widen-x'>
                <h1 className='text-white display-6 title-font text-center'>William Elliott</h1>
            </div>
            <div className='media-remove'>
                <a className='text-white fa-brands fa-github fa-4x mx-5' style={removeLinkStyle} href='http://github.com/wjtelliott'></a>
                <a className='text-white fa-brands fa-linkedin fa-4x mx-5' style={removeLinkStyle} href="https://www.linkedin.com/in/william-jt-elliott/"></a>
            </div>
            {
                showNavMenu &&
                <div className='float-right w-25 media-remove d-flex flex-nowrap justify-content-center'>
                    <div className="dropdown">
                        <button
                            className="btn btn-secondary dropdown-toggle"
                            type="button"
                            id="headerDropdownMenu" 
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Navigation
                            {/* <i className="fa fa-bars"></i> */}
                        </button>
                        <ul
                            className="dropdown-menu"
                            aria-labelledby="headerDropdownMenu"
                        >
                            <li><a className="dropdown-item" href="#about">About Me</a></li>
                            <li><a className="dropdown-item" href="#projects">Projects</a></li>
                            <li><a className="dropdown-item" href="#exp">Prior Experience</a></li>
                            <li><hr className='dropdown-divider'/></li>
                            <li><a className='dropdown-item' href="#contact">Contact Me</a></li>
                        </ul>
                    </div>
                </div>    
            }
            <div className='media-show'>
                <a className='text-white fa-brands fa-github fa-2x mx-5' style={removeLinkStyle} href='http://github.com/wjtelliott'></a>
                <a className='text-white fa-brands fa-linkedin fa-2x mx-5' style={removeLinkStyle} href="https://www.linkedin.com/in/william-jt-elliott/"></a>
            </div>
        </header>
    )
}

export default Header;