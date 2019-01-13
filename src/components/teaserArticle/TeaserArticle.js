import React from 'react';
import './TeaserArticle.scss';
import TeaserText from './teaserText/TeaserText';
import TeaserImage from './teaserImage/TeaserImage';

function TeaserArticle({image, ...props}){
    return(
        <article className = 'c-TeaserArticle'>
            <TeaserImage image = {image} />
            <TeaserText {...props} />
        </article>
    )
}

export default TeaserArticle;