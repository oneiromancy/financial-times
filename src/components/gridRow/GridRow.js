import React from 'react';
import './GridRow.scss';

function GridRow({hasBackgroundColor, ...props}){

    const addBackgroundColor = hasBackgroundColor && 'c-GridRow--addBackgroundColor';

    return(
        <div className = {`c-GridRow ${addBackgroundColor}`}>
            <div className = 'c-GridRow__ContentWrapper'>
                {props.children}
            </div>
        </div>
    )
}

export default GridRow;