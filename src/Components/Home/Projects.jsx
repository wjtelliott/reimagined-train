import * as React from 'react';
import Project from '../Projects/Project';
import { boxShadowStyle } from '../Shared/StylePresets';

const Projects = () => {

    const projects = [
        {
            imgsrc: '/images/rest-picker.JPG',
            title: 'Restaurant Picker',
            desc: 'Have no idea where to eat out at tonight?{n}Type/Click a category or "I\'m flexible" to view local businesses in your current area of that category.{n}Uses multiple APIs to get the user\'s GeoLocation, display local businesses, and an interactive GeoMap. Users are authorized through Auth0 and info is stored with a NoSQL back-end.{n}This uses a free Heroku account, and may take a while to load on the first request.',
            imgalt: 'An image of the idc-picker webpage',
            aosStyle: 'zoom-in-up',
            aosDelay: '300',
            aosDuration: '1000',
            repoLink: 'https://github.com/wjtelliott/i-dont-care',
            demoLink: 'https://idc-picker.herokuapp.com/'
        },
        {
            imgsrc: '/images/space-game-splash.JPG',
            title: 'Another Space Game',
            desc: 'A space ship game made from scratch using standard JS & HTML5.{n}This utilizes class structure/inheritance and OOP to create game logic, sounds, and animations.{n}This project\'s notable features are a basic raycasting lighting system as well as velocity, friction, and collision logic.',
            imgalt: 'An image of a space ship game',
            aosStyle: 'zoom-in-right',
            aosDelay: '300',
            aosDuration: '1000',
            repoLink: 'https://github.com/wjtelliott/project-submission-1',
            demoLink: 'https://wjtelliott.github.io/project-submission-1/'
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
                <p className='m-5 text-center px-3 display-5 title-font' >My Recent Projects</p>
            </div>
            
            {formattedProjects}
            
        </div>
        
    )
}

export default Projects;