import * as React from 'react';

const PriorJob = props => {

    const formattedLines = props.desc.map( (el, index) => {
        return (
            <p key={`jobKey${index}`}>{el}</p>
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