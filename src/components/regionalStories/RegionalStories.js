import React from 'react';
import './RegionalStories.scss';
import TeaserArticle from '../teaserArticle/TeaserArticle';
import NewsSection from '../newsSection/NewsSection';

function RegionalStories({headlines}){

    const groupedArticles = [
        {MainArticle: headlines.slice(0, 1)}, 
        {SecondaryArticles: headlines.slice(1,)} 
    ];

    return(
            <NewsSection section = 'UK News' hasHeader = {true}>   
                {
                    // Creates a parent div to group articles as Main/Secondary Articles
                    groupedArticles.map((articles, parentIndex) => {

                        const articleType = articles['MainArticle']? 'MainArticle': 'SecondaryArticles';
                        
                        return(
                            <div key = {parentIndex} className = { `l-TeaserArticle__${articleType}`}>
                                {  
                                    articles[articleType].map((teaserData, childIndex) => {
                                        return(
                                            <TeaserArticle 
                                                key = {childIndex}
                                                {...teaserData}

                                            />
                                        )
                                    })
                                }
                            </div>
                        )

                    })
                }
            </NewsSection>
    )

}

export default RegionalStories;