import * as React from 'react';

const Header = ({showNavMenu}) => {

    const headerStyle = {
        alignItems: 'center'
    }

    return (
        <header className='bg-dark w-100 py-1 d-flex flex-nowrap justify-content-between' style={headerStyle}>
            <a href='/' className='d-inline-block m-2'><img src='/logo.png' className='rounded-circle w-75 media-remove'/></a>
            <div className='d-inline-block container w-75 align-top m-1'>
                <h1 className='text-white display-5 title-font'>William Elliott - Software Developer</h1>
            </div>
            {
                showNavMenu &&
                <div className='float-right mx-4'>
                    <div className="dropdown">
                        <button
                            className="btn btn-secondary dropdown-toggle"
                            type="button"
                            id="headerDropdownMenu" 
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <i className="fa fa-bars"></i>
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
            
        </header>
    )
}

export default Header;