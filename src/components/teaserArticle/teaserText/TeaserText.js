import React from 'react';
import './TeaserText.scss';

const TeaserText = ({topic, title, summary}) => {
    return ( 
        <div className = 'c-TeaserText'>

            <h2 className = 'c-TeaserText__Topic'>
                <a className = 'c-TeaserText__Topic--typography' href = '/'>{topic}</a>
            </h2>
            
            <h3 className = 'c-TeaserText__Title'>
                <a className = 'c-TeaserText__Title--typography' href = '/'>{title}</a>
            </h3>
            
            <p className = 'c-TeaserText__Summary c-TeaserText__Summary--typography'>{summary}</p>

        </div>
     );
}
 
export default TeaserText;