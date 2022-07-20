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
                'Maintain inventory accuracy to ensure minimal expenditure waste amongst delivery teams',
                'Promptly deliver to customer homes on scheduled time and  customer satisfaction of product',
                'Repair and replace damaged or unsatisfactory product with customer requests'
            ]
        },
        {
            title: 'Warehouse Supervisor',
            desc: [
                'Full-time',
                'Dates: Mar \'21 - Jun \'22, 1yr 4mos',
                'Communicate between buyers, retail managers, and vendors to facilitate effective inventory reports for accounts payable',
                'Maintain and verify BOLs with the physical inbound product to foster accurate inventory control',
                'Participate in and sustain 5S standards to create a safe, productive work environment for all coworkers',
                'Provide direct reports and other lead staff with tasks and their appropriate daily deadlines to implement a consistent workflow',
            ]
        },
        {
            title: 'Warehouse Lead',
            desc: [
                'Full-time',
                'Dates: Apr \'18 - Mar \'21, 3yrs',
                'Ongoing coaching and training for employees on operational processes, expectations, safety guidlines, teambuilding, and interpersonal skills to help facilitate an effective, complete, and productive work environment',
                'Participate in and coach employees on product quality assurance to maintain proper expected product quality from all vendors and to all delivered customers',
                'Oversee all equiptment safetly logs and test required daily and weekly safety tests to equip all coworkers with proper, safe gear and machines. Use Lock Out-Tag Out procedures with all machines that require service to prevent accidental injury or damage'
            ]
        },
        // {
        //     title: 'Merchandise Handler',
        //     desc: [
        //         'Full-time',
        //         'Dates: Apr \'17 - Apr \'18, 1 yr'
        //     ]
        // }
    ];

    const formattedProirs = priors.map( (el, index) => {
        return (
            <PriorJob
                key={`priorJobKey${index}`}
                title={el.title}
                desc={el.desc}
            />
        )
    })


    return (
        <div className='mt-5 mx-5 d-flex flex-nowrap justify-content-center'>
            <div
                className='w-75 media-full'
                data-aos='zoom-out-right'
                id='exp'
            >
                <div style={cardStyle} className='card'>

                    <p className='card-title display-4 mx-4 mt-3 title-font'>Prior Experience</p>
                    <p className='text-muted mx-4'>And main duties</p>
                    <ul className='list-group list-group-flush my-4 text-center'>
                        {formattedProirs}
                    </ul>
                </div>
            </div>
            
        </div>
        
    )
}

export default PriorExp;