import * as React from 'react';
import { divStyle, boxShadowStyle, cardImageStyle, cardStyle } from '../Shared/StylePresets'

const About = () => {

    const skillset = [
        {
            skill: 'Javascript:',
            amt: 5
        },
        {
            skill: 'React:',
            amt: 5
        },
        {
            skill: 'HTML/CSS:',
            amt: 5
        },
        {
            skill: 'MongoDB:',
            amt: 4
        },
        {
            skill: 'Python:',
            amt: 3
        },
        {
            skill: 'SQL:',
            amt: 3
        },
    ]


    const getCircles = (amt, filled = false) => [...Array(amt).keys()].map(el => {
        return filled ?
        (<span className='mx-1 fa-solid fa-circle'></span>) :
        (<span className='mx-1 fa-regular fa-circle'></span>)
    })

    const formattedSkills = () => {
        return skillset.map( el => {
            return (
            <div className='mx-4 d-flex flex-nowrap justify-content-center'>
                <span className='w-50'>{el.skill}</span>
                {getCircles(el.amt, 1)}
                {getCircles(5 - el.amt)}
            </div>
            )
        })
    }

    return (
        <div
            className='my-4 px-3 d-flex flex-nowrap justify-content-evenly'
            style={divStyle}
            id='about'
        >

            <img
                className='rounded-circle w-25 media-remove'
                src="/images/portrait.jpg"
                alt="A portrait image"
                style={boxShadowStyle}
            />

            <div className='card w-50 media-widen' style={cardStyle}>
                <img
                    src="/images/portrait.jpg"
                    className="card-img-top media-show"
                    alt="A portrait image"
                    style={cardImageStyle}
                />

                <p className='card-title display-6 m-4 title-font'>About Me</p>
                <p className='card-content m-4'>
                    Aspiring Software Developer coming from a hobbyist background in C#, Python, Java, and Javascript.
                </p>

                <p className='mx-4 title-font'>Core Skills:</p>

                <div className='my-3'>
                    {formattedSkills()}
                </div>
            </div>
        </div>
        
    )
}

export default About;