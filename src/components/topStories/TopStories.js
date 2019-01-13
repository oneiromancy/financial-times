import React from 'react';
import './TopStories.scss';
import NewsSection from '../newsSection/NewsSection';
import TeaserArticle from '../teaserArticle/TeaserArticle';

function TopStories({headlines}){
    return(
        <NewsSection section = 'Top Stories'>
            {
                headlines.map((teaserData, index) => {
                    return (
                        <div className = 'l-TeaserArticle'>
                            <TeaserArticle
                                key = {index}
                                {...teaserData}
                            />
                            {
                                index === 0 && 
                                    <aside className = 'c-Teaserarticle__RelatedHeadlines'>
                                        <ul className = 'c-RelatedHeadlines__ListItems'>
                                            {
                                                headlines[index]['related'].map( (relatedEntry) => {
                                                    return <li><a href = '/'>{relatedEntry.title}</a></li>
                                                })
                                            }
                                        </ul>
                                    </aside>
                            }
                        </div>
                    )
                })
            }
        </NewsSection>
    )
}

export default TopStories;