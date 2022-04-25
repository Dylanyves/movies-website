import React, { useRef } from 'react'
import Link from 'next/link'

import { useRouter } from 'next/router'

function Header({ }) {
    const searchQuery = useRef()
    const router = useRouter()

    function handleSubmit(e) {
        e.preventDefault()
        const input = searchQuery.current.value.toLowerCase().replace(" ", "-")
        router.push(`/search/${input}/1`)
    }

    return (
        <nav className="flex flex-col text-white">
            <div className="bg-slate-900">
                <div className="max-w-7xl p-4 m-auto flex justify-between text-sm">
                    <Link href="/">
                        Movies
                    </Link>
                    <form onSubmit={handleSubmit}>
                        <input ref={searchQuery} className="text-xs md:text-sm focus:outline-0 focus:border-yellow-500 py-1 px-2 text-black rounded-[4px] border-2 border-slate-800" type="text" placeholder='Search Movies' />
                    </form>
                </div>
            </div>
            <div className="bg-slate-800 py-4">
                <ul className="max-w-7xl px-4 m-auto text-xs md:text-sm flex flex-wrap gap-2 mb-4">
                    <li className="inline-block cursor-pointer px-2 py-1 bg-yellow-600 hover:bg-yellow-700 ease-in duration-150 rounded-sm"><Link href="/upcoming/1">Upcoming</Link></li>
                    <li className="cursor-pointer px-2 py-1 bg-yellow-600 hover:bg-yellow-700 ease-in duration-150 rounded-sm"><Link href="/now-playing/1">Now Playing</Link></li>
                    <li className="cursor-pointer px-2 py-1 bg-yellow-600 hover:bg-yellow-700 ease-in duration-150 rounded-sm"><Link href="/most-voted/1">Most Voted</Link></li>
                    <li className="cursor-pointer px-2 py-1 bg-yellow-600 hover:bg-yellow-700 ease-in duration-150 rounded-sm"><Link href="/tv-discover/1">TV</Link></li>
                    <li className="group relative cursor-pointer px-2 py-1 bg-yellow-600 hover:bg-yellow-700 ease-in duration-150 rounded-sm"><Link href="/genre">Genre</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header
