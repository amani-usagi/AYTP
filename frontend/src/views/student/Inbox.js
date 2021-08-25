import React from 'react'

import CardInbox from '../../components/Cards/Inbox';

export default function Inbox() {
    return (
        <div className="flex flex-wrap mt-4">
            <div className="w-full mb-12 px-4">
                <CardInbox/>
            </div> 
        </div>
    )
}
