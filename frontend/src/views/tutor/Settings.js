import React from 'react'

import Settings from '../../components/Cards/Settings';

export default function settings() {
    return (
        <>
        <div className="flex flex-wrap -mt-16">
            <div className="w-full xl:w-7/12 mb-12 xl:mb-0 px-4">
                <Settings />
            </div>
        </div>
        </>
    )
}
