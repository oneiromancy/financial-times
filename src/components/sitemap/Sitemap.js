import React from 'react';
import './Sitemap.scss';
import WebsiteDisclaimer from './websiteDisclaimer/WebsiteDisclaimer';
import NavbarMenu from './navbarMenu/NavbarMenu';
import CompanyDetails from './companyDetails/CompanysDetails';

function Sitemap(){
    return(
        <footer className = 'Footer'>
            <div className = 'c-Footer'>

                <div className = 'c-FooterNavbar'>
                        <NavbarMenu 
                            section = {'Support'} 
                            subsections = {['View Site Tips', 'Help Centre', 'About Us', 'Accessibility', 'MyOneriromancy Tour']}
                        />
                        <NavbarMenu 
                            section = {'Legal And Privacy'} 
                            subsections = {['Terms & Conditions', 'Privacy', 'Cookies', 'Copyright', 'Slavery Statement & Policies']}
                        />
                        <NavbarMenu 
                            section = {'Services'} 
                            subsections = {[
                                'Oneriromancy Live',
                                'Share News Tips Securely',
                                'Individual Subscriptions',
                                'Group Subscriptions',
                                'Republishing',
                                'Contracts & Tenders',
                                'Analysts Research',
                                'Executive Job Search',
                                'Advertise with the Oneriromancy',
                                'Follow the Oneriromancy on Twitter',
                                'Oneriromancy Transact',
                                'Secondary Schools'
                            ]}
                        />
                        <NavbarMenu 
                            section = {'Tools'} 
                            subsections = {[
                                'Portfolio',
                                "Today's Newspaper (ePaper)",
                                'Alerts Hub',
                                'Lexicon',
                                'MBA Rankings',
                                'Economic Calendar',
                                'News feed',
                                'Newsletters',
                                'Currency Converter'
                            ]}
                        />
                </div>

                <CompanyDetails/>  

                <WebsiteDisclaimer/>

            </div>
        </footer>

    )
}

export default Sitemap;