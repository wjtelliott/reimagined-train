import * as React from 'react';
import Project from '../Projects/Project';
import { textShadowStyle, boxShadowStyle } from '../Shared/StylePresets';

const Projects = () => {

    const projects = [
        {
            imgsrc: '/images/space-game-splash.JPG',
            title: 'Another Space Game',
            desc: 'A space ship game made only in JS & HTML5. This utilizes class structure and OOP to create game logic and animations.',
            imgalt: 'An image of a space ship game',
            aosStyle: 'zoom-in-right',
            aosDelay: '300',
            aosDuration: '1000',
            repoLink: 'https://github.com/wjtelliott/project-submission-1',
            demoLink: 'https://wjtelliott.github.io/project-submission-1/'
        },
        {
            imgsrc: '/images/rest-picker.JPG',
            title: 'Restaurant Picker',
            desc: 'Have no idea where to eat out at tonight? Type/Click a category or "I\'m flexible" to choose a local restaurant in your current area at random. Uses multiple APIs to display local businesses, an interactive GeoMap, and to get the user\'s GEO-Location. Users are authorized through Auth0 and info is stored with a NoSQL back-end. This uses a free Heroku account, and may take a while to load on the first request.',
            imgalt: 'An image of the idc-picker webpage',
            aosStyle: 'zoom-in-up',
            aosDelay: '300',
            aosDuration: '1000',
            repoLink: 'https://github.com/wjtelliott/i-dont-care',
            demoLink: 'https://idc-picker.herokuapp.com/'
        },
    ];

    const formattedProjects = projects.map( (el, index) => {
        return (
            <Project
                key={`projectKey${index}`}
                imgsrc={el.imgsrc}
                title={el.title}
                desc={el.desc}
                imgalt={el.imgalt}
                aosStyle={el.aosStyle}
                aosDelay={el.aosDelay}
                aosDuration={el.aosDuration}
                repoLink={el.repoLink}
                demoLink={el.demoLink}
            />
        )
    })

    return (
        <div className='my-5 d-flex flex-wrap justify-content-center' id='projects'>

            
            <div
                className='card mx-4 mt-5 media-remove'
                data-aos='fade-up'
                style={boxShadowStyle}
            >
                <p className='m-5 text-center p-3 display-5 title-font' >My Recent Projects</p>
            </div>
            
            {formattedProjects}
            
        </div>
        
    )
}

export default Projects;