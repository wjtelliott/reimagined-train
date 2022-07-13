import * as React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer';
import Header from '../Shared/Header';
import { cardStyle } from '../Shared/StylePresets';

const ContactForm = () => {

    const notYetImplemented = () => {
        alert('Back-end for this is not yet inplemented! :(');
    }

    return (
        <div>

            <Header showNavMenu={false} />
        

            <form className='w-50 card p-5 m-auto my-4 media-widen-x' style={cardStyle}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" placeholder='...@email.com' className="form-control" id="email" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">I will never share your email with anyone.</div>
                </div>

                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" />
                </div>

                <div>
                    <label htmlFor='desc' className='form-label'>Comments</label>
                    <textarea className='form-control' id='desc'></textarea>
                </div>

                <div className='d-flex flex-wrap justify-content-center'>
                    <button type="submit" className="btn btn-primary w-25 m-3 media-widen" onClick={() => notYetImplemented()}>Submit</button>
                    <Link to='/' className='btn btn-danger w-25 m-3 media-widen'>Go Back</Link>
                </div>            
            </form>
            
            <Footer />

        </div>
        
    )
}

export default ContactForm;