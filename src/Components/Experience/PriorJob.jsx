import * as React from 'react';
import { cardImageStyle, cardStyle } from '../Shared/StylePresets';

const PriorJob = props => {


    const formattedLines = props.desc.map( el => {
        return (
            <p>{el}</p>
        )
    })

    return (
        <li className='list-group-item px-4'>
            <p className='display-6'><u>{props.title}</u></p>
            {formattedLines}
        </li>
        
    )
}

export default PriorJob;