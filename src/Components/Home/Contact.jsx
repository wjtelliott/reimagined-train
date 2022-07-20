import * as React from 'react';
import { cardStyle } from '../Shared/StylePresets';
import { Link } from 'react-router-dom';

const Contact = () => {

    

    return (
        <div
            className='mx-5 m-auto'
            id='contact'
        >

            <div
                className='card m-auto my-5 m-auto w-75 media-full'
                data-aos='fade-up'
                style={cardStyle}
            >
                <p className='card-title m-3 display-3 title-font' >Interested?</p>
                <p className='card-content display-6 m-3'>
                    Check out my contact links below!
                    <br/>
                    Click <Link to='contact' style={{textDecoration: 'none'}}>Here</Link> for an easy form.
                </p>
                <p className='text-center text-muted'>Or you can reach me at wjtelliott@gmail.com</p>
            </div>
        
        </div>
        
    )
}

export default Contact;