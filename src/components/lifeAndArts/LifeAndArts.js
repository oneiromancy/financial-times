import React from 'react';
import './LifeAndArts.scss';
import TeaserArticle from '../teaserArticle/TeaserArticle';
import NewsSection from '../newsSection/NewsSection';

function LifeAndArts({headlines}){
    return(
        <NewsSection section = 'Life and Arts' hasHeader = {true}>
            {
                headlines.map((teaserData, index) => {
                    return (
                        <div className = 'l-TeaserArticle'>
                            <TeaserArticle
                                key = {index}
                                {...teaserData}
                            />
                        </div>
                    )
                })
            }
        </NewsSection>
    )
}

export default LifeAndArts;