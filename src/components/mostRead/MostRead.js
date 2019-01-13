import React from 'react';
import './MostRead.scss';
import TeaserArticle from '../teaserArticle/TeaserArticle';
import NewsSection from '../newsSection/NewsSection';

function MostRead({headlines}){
    return(
            <NewsSection section = 'Most Read' hasHeader = {true}>
                <ol className = 'l-MostRead__articleList'>
                    {
                        headlines.map(teaserData => {
                            return(
                                <li className = 'l-TeaserArticle'>
                                    <TeaserArticle {...teaserData} />
                                </li>
                            )
                        })
                    }
                </ol>
            </NewsSection>
    )
}

export default MostRead;