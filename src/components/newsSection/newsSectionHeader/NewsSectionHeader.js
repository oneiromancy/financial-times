import React from 'react';
import './NewsSectionHeader.scss';

function NewsSectionHeader({title}){
    return(
        <h2 className = 'NewsSection__Header NewsSection__Header--addBorder'>
            <a className = 'NewsSection__Header--typography' href = '/'>
                {title}
            </a>
        </h2>
    )
}

export default NewsSectionHeader;