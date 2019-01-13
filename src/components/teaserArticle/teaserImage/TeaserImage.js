import React from 'react';

const GroupImage = ({image}) => {
    return ( 
        <div className = 'c-TeaserImage'>
            <a href = '/'>
                <img src = {image} alt = ''/>
            </a>
        </div>
     );
}
 
export default GroupImage;