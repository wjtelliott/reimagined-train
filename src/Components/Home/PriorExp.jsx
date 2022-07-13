import * as React from 'react';
import { cardStyle } from '../Shared/StylePresets';
import PriorJob from '../Experience/PriorJob';

const PriorExp = () => {

    const priors = [
        {
            title: 'Store Associate',
            desc: [
                'Part-time',
                'Dates: Jun \'22 - Present',
                ' - Maintain inventory accuracy',
                ' - Customer Deliveries',
            ]
        },
        {
            title: 'Warehouse Supervisor',
            desc: [
                'Full-time',
                'Dates: Mar \'21 - Jun \'22, 1yr 4mos',
                ' - Communicate between buyers, retail managers, & vendors',
                ' - Maintain and verify BOLs and other office reports',
                ' - Maintain safe, productive work environment',
                ' - Communicate with team to ensure daily task deadlines are met',
                ' - Over 30 direct reports',
            ]
        },
        {
            title: 'Warehouse Lead',
            desc: [
                'Full-time',
                'Dates: Apr \'18 - Mar \'21, 3yrs',
                ' - Train new team members',
                ' - Ensure product quality',
                ' - Oversee equipment safety logs'
            ]
        },
        {
            title: 'Merchandise Handler',
            desc: [
                'Full-time',
                'Dates: Apr \'17 - Apr \'18, 1 yr'
            ]
        }
    ];

    const formattedProirs = priors.map(el => {
        return (
            <PriorJob
                title={el.title}
                desc={el.desc}
            />
        )
    })


    return (
        <div className='mt-5 d-flex flex-nowrap justify-content-center'>
            <div
                className='w-50 m-3 media-widen-x'
                data-aos='zoom-out-right'
                id='exp'
            >
                <div style={cardStyle} className='card w-100'>

                    <p className='card-title display-4 mx-4 mt-3 title-font'>Prior Experience</p>
                    <p className='text-muted mx-4'>And main duties</p>
                    <ul className='list-group list-group-flush my-4'>
                        {formattedProirs}
                    </ul>
                </div>
            </div>
            
        </div>
        
    )
}

export default PriorExp;