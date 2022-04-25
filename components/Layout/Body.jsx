import React from 'react'
import Link from 'next/link'

import { AiFillStar } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa'
import { TYPE_VARS } from '/vars'

function Body({ type, list, title }) {
    return (
        <>
            <main>
                <header>
                    <h1 className="text-yellow-600 text-2xl border-b-4 border-yellow-600 w-fit font-bold mb-8">{title ? title : 'Title'}</h1>
                </header>
                {(list.results && list.results.length > 0) ? <section className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-4">
                    {list.results.map(item => (
                        <Link key={item.id} href={`/${type.toLowerCase()}/${item.id}`}>
                            <div className="relative cursor-pointer rounded-sm group min-h-[261px]">
                                <img className="h-full w-full object-cover" src={item.poster_path ? `https://image.tmdb.org/t/p/w185/${item.poster_path}` : 'https://www.chanchao.com.tw/images/default.jpg'} alt={item.original_title} />
                                <div className="absolute top-0 left-0 flex gapx-2 bg-yellow-600 rounded-br-sm">
                                    <div className="px-1 py-[1px] flex items-center gap-x-[2px]">
                                        <span className="text-[12px]"><AiFillStar /></span>
                                        <span className="text-xs">{item.vote_average ? (item.vote_average) : 0}</span>
                                    </div>
                                    <div className="px-1 py-[1px] flex items-center gap-x-[2px]">
                                        <span className="text-[10px]"><FaUser /></span>
                                        <span className="text-xs">{item.vote_count}</span>
                                    </div>
                                </div>
                                <div className="flex absolute top-0 right-0 px-1 py-[1px] bg-blue-600 rounded-bl-sm">
                                    <abbr className="text-xs">{item.original_language}</abbr>
                                </div>

                                <div className="absolute bottom-0 right-0 w-full px-1 pb-2 pt-8 bg-gradient-to-t from-black">
                                    {(type === TYPE_VARS.MOVIE && item.release_date) && <h2 className="text-xs text-center tracking-tight leading-3 break-words">{`${item.original_title} (${item.release_date.split('-')[0]})`}</h2>}
                                    {type === TYPE_VARS.TV && <h2 className="text-xs text-center tracking-tight leading-3">{item.name}</h2>}
                                </div>
                                <div className="group-hover:inline-flex group-hover:items-center group-hover:justify-center hidden absolute top-0 left-0 w-full h-full text-sm bg-black/[0.7]">
                                    Read More
                                </div>
                            </div>
                        </Link>
                    ))}
                </section> : <span>No data</span>}
            </main>
        </>
    )
}

export default Body