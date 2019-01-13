import React from 'react';
import './NewsSection.scss';
import NewsSectionHeader from './newsSectionHeader/NewsSectionHeader';

function NewsSection({section, hasHeader, ...props}){

    const newsSectionTag = section && `c-NewsSection__${section.replace(/\s/g, "-")}`;

    return(
        <section className = {`${newsSectionTag} ${hasHeader && 'c-NewsSection--addBorder'}`}>
        
                {hasHeader && <NewsSectionHeader title = {section} />}

                <div className = 'c-NewsSection__Headlines--gridDesign'>
                    {props.children}
                </div>

        </section>
    )
}

export default NewsSection;