import React from 'react'

import { TYPE_VARS } from '/vars'

function Header({ type, data }) {
    return (
        <>
            <div>
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl tracking-tighter font-semibold mb-1">{type === TYPE_VARS.MOVIE ? data.original_title : data.name}</h1>
                    <div className="hidden sm:flex gap-x-6 self-end">
                        <div className="relative before:font-light before:content-['Rating'] before:text-xs before:tracking-tighter before:text-gray-200 before:absolute before:top-[-13px] before:left-1/2 before:-translate-x-1/2">
                            <i aria-hidden className="fas fa-star text-yellow-500 mr-1"></i>
                            <span className="font-base">{data.vote_average}</span>
                        </div>
                        <div className="relative before:font-light before:content-['Voters'] before:text-xs before:tracking-tighter before:text-gray-200 before:absolute before:top-[-13px] before:left-1/2 before:-translate-x-1/2">
                            <i aria-hidden className="fas fa-user text-yellow-500 mr-1"></i>
                            <span className="font-base">{data.vote_count}</span>
                        </div>
                        <div className="relative before:font-light before:content-['Popularity'] before:text-xs before:tracking-tighter before:text-gray-200 before:absolute before:top-[-13px] before:left-1/2 before:-translate-x-1/2">
                            <i aria-hidden className="fas fa-chart-line text-blue-500 mr-1"></i>
                            <span className="font-base">{data.popularity}</span>
                        </div>
                    </div>
                </div>
                <div className="mb-6">
                    <div className="text-sm font-light text-gray-300">
                        {type === TYPE_VARS.MOVIE && <div className="flex gap-x-3">
                            <span>{data.release_date.split("-")[0]}</span>
                            <span>{data.runtime}<span> minute</span></span>
                            <span className="inline-flex bg-blue-600 px-1 rounded-sm text-white">{data.original_language}</span>
                        </div>}
                        {type === TYPE_VARS.TV && <div className="flex gap-x-3">
                            <span>{`${data.first_air_date.split("-")[0]} - ${data.last_air_date.split("-")[0]}`}</span>
                            <span>{data.type}</span>
                            <span className="inline-flex bg-blue-600 px-1 rounded-sm text-white">{data.original_language}</span>
                        </div>}
                    </div>
                </div>
            </div>
        </>

    )
}

export default Header