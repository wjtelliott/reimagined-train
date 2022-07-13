import React from 'react';
import { removeLinkStyle } from './StylePresets';

const Footer = () => {
    return (
        <footer className='bg-dark text-white w-100 mt-5 d-flex flex-wrap justify-content-center'>

                <a className='text-white fa-brands fa-github fa-4x mx-5' style={removeLinkStyle} href='http://github.com/wjtelliott'></a>

                <a className='text-white fa-brands fa-linkedin fa-4x mx-5' style={removeLinkStyle} href="https://www.linkedin.com/in/william-jt-elliott/"></a>

                {/* <a className='text-white fa-regular fa-address-card fa-4x mx-5' style={removeLinkStyle} href="/contact"></a> */}
                
                {/* <a className='text-white fa-brands fa-google fa-4x mx-5' style={removeLinkStyle} href="#"></a> */}

        </footer>
    )
}

export default Footer;