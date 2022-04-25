import React from 'react'

function Stats({ data }) {
    return (
        <div className="flex justify-between items-center mb-10">
            <div className="flex sm:hidden gap-x-6 self-end">
                <div className="relative before:font-light before:content-['Rating'] before:text-[11px] before:tracking-tighter before:text-gray-200 before:absolute before:top-[-13px] before:left-1/2 before:-translate-x-1/2">
                    <i aria-hidden className="text-sm fas fa-star text-yellow-500 mr-1"></i>
                    <span className="font-base text-sm">{data.vote_average}</span>
                </div>
                <div className="relative before:font-light before:content-['Voters'] before:text-[11px] before:tracking-tighter before:text-gray-200 before:absolute before:top-[-13px] before:left-1/2 before:-translate-x-1/2">
                    <i aria-hidden className="text-sm fas fa-user text-yellow-500 mr-1"></i>
                    <span className="font-base text-sm">{data.vote_count}</span>
                </div>
                <div className="relative before:font-light before:content-['Popularity'] before:text-[11px] before:tracking-tighter before:text-gray-200 before:absolute before:top-[-13px] before:left-1/2 before:-translate-x-1/2">
                    <i aria-hidden className="text-sm fas fa-chart-line text-blue-500 mr-1"></i>
                    <span className="font-base text-sm">{data.popularity}</span>
                </div>
            </div>
        </div>
    )
}

export default Stats