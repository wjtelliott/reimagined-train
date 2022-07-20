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


    const getCircles = (amt, filled = false) => [...Array(amt).keys()].map(index => {
        return filled ?
        (<span key={`spanKey${index}`} className='mx-1 fa-solid fa-circle'></span>) :
        (<span key={`spanKey${index}`} className='mx-1 fa-regular fa-circle'></span>)
    })

    const formattedSkills = () => {
        return skillset.map( (el, index) => {
            return (
            <div
                key={`skillsetKey${index}`}
                className='mx-4 d-flex flex-nowrap justify-content-center'
            >
                <span className='w-50'>{el.skill}</span>
                {getCircles(el.amt, 1)}
                {getCircles(5 - el.amt)}
            </div>
            )
        })
    }

    return (
        <div
            className='my-4 d-flex flex-nowrap justify-content-evenly media-full'
            style={divStyle}
            id='about'
        >

            

            <img
                className='img-fluid media-remove w-25 rounded-circle mx-5'
                src="/images/portrait.jpg"
                alt="A portrait image"
                style={boxShadowStyle}
            />

            <div className='card w-50 media-widen-x mx-5' style={cardStyle}>
                <img
                    src="/images/portrait.jpg"
                    className="card-img-top media-show"
                    alt="A portrait image"
                    style={cardImageStyle}
                />

                <p className='card-title display-6 m-4 title-font'>About Me</p>

                <p className='card-content m-4'>
                    Software Developer with a background in C#, Python, Java, and Javascript.<br/><br/>
                    I enjoy coding, tabletop games, hiking, as well as playing and creating video games.<br/><br/>
                    Throughout my prior workplaces, I've stayed productive under pressure to mitigate problems before they become a crisis, help myself and others control emotional work stress, and value transparency and communication above all else.
                </p>

                {/* <p className='card-content m-4'>
                    Education to go here?
                </p> */}

                <p className='m-4 title-font'>Core Skills:</p>

                <div className='my-3'>
                    {formattedSkills()}
                </div>
            </div>
        </div>
        
    )
}

export default About;