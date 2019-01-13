import React from 'react';
import './WebsiteDisclaimer.scss';

function WebsiteDisclaimer(){
    return(
        <div className = 'Footer__WebsiteDisclaimer'>
            <small>
                Markets data delayed by at least 15 minutes. &copy; The Oneiromancy Ltd 2018. Oneiromancy and 
                ‘Oneiromancy’ are trademarks of The Oneiromancy Ltd.<br/>The Oneiromancy and 
                its journalism are subject to a self-regulation regime under the <a href = '/'>Oneiromancy Editorial Code of Practice.</a>
            </small>
        </div>
    )
}

export default WebsiteDisclaimer;