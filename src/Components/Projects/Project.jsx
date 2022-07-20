import * as React from 'react';
import { cardImageStyle, cardStyle } from '../Shared/StylePresets';

const Project = props => {


    const descLines = props.desc
        .split('{n}')
        .map((el, index) => {
            return (<p key={`propsDesc${index}`} style={{marginTop: '-.3em'}}>{el}</p>)
        });

    return (
        <div className='mt-5 w-100 media-full mx-5 d-flex flex-nowrap justify-content-center'>
            <div
                className='w-75 media-full'
                data-aos={props.aosStyle}
                data-aos-delay={props.aosDelay}
                data-aos-duration={props.aosDuration}
            >
                <div style={cardStyle} className='card w-100'>

                    <img style={cardImageStyle} className='card-img-top' src={props.imgsrc} alt={props.imgalt} />

                    <p className='card-title display-5 m-4 title-font'>{props.title}</p>
                    <div className='card-content m-4'>{descLines}</div>

                    <div className='d-flex flex-nowrap justify-content-center my-4'>
                        <a className='btn btn-primary w-25 mx-2' href={props.repoLink}>View Repo</a>
                        <a className='btn btn-success w-25 mx-2' href={props.demoLink}>Goto App</a>
                    </div>
                </div>
            </div>
            
        </div>
        
    )
}

export default Project;