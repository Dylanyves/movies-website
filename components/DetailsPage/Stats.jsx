import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { FaUser } from 'react-icons/fa'
import { BsGraphUp } from 'react-icons/bs'

function Stats({ data }) {
    return (
        <div className="flex sm:hidden gap-x-6 self-end mb-10">
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
    )
}

export default Stats