import React from 'react';
import './NavbarMenu.scss';

function NavbarMenu({section, subsections}){
    return(
        <div className = {`Navbar__${section.replace(/\s/g, "")}`}>

            <h2 className= ' Navbar__MenuHeader'>{section}</h2>

            <ul className = 'Menu__ListItems'>

                {
                    subsections.map((option) => {
                        return(
                            <li className = 'Menu__item'><a href = '/'>{option}</a></li>
                        )

                    })
                }
                
            </ul>

        </div>
    )
}

export default NavbarMenu;