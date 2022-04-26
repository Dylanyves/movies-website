import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { FaUser } from 'react-icons/fa'
import { BsGraphUp } from 'react-icons/bs'
import { TYPE_VARS } from '/vars'

function Header({ type, data }) {
    return (
        <>
            <div>
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl tracking-tighter font-semibold mb-1">{type === TYPE_VARS.MOVIE ? data.original_title : data.name}</h1>
                    <div className="hidden sm:flex gap-x-6 self-end">
                        <div className=" flex gap-x-1 items-center relative before:font-light before:content-['Rating'] before:text-xs before:tracking-tighter before:text-gray-200 before:absolute before:top-[-13px] before:left-1/2 before:-translate-x-1/2">
                            <AiFillStar className="text-yellow-500 text-sm " />
                            <span className="font-base">{data.vote_average}</span>
                        </div>
                        <div className="flex gap-x-1 items-center relative before:font-light before:content-['Voters'] before:text-xs before:tracking-tighter before:text-gray-200 before:absolute before:top-[-13px] before:left-1/2 before:-translate-x-1/2">
                            <FaUser className="text-yellow-500 text-sm" />
                            <span className="font-base">{data.vote_count}</span>
                        </div>
                        <div className="flex gap-x-1 items-center relative before:font-light before:content-['Popularity'] before:text-xs before:tracking-tighter before:text-gray-200 before:absolute before:top-[-13px] before:left-1/2 before:-translate-x-1/2">
                            <BsGraphUp className="text-yellow-500 text-sm" />
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