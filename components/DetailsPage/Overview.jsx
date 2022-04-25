import React from 'react'
import Link from 'next/link'

function Overview({ genres, overview }) {
    return (
        <article className="mb-10">
            <ul className="flex gap-2 flex-wrap mb-4 text-xs lg:text-sm">
                {genres.map(genre => (
                    <Link passHref key={genre.id} href="/"><li className="cursor-pointer hover:bg-blue-700 bg-blue-600 px-2 py-[4px] rounded-sm">{genre.name}</li></Link>
                ))}
            </ul>
            <p className="font-light text-sm sm:text-base">{overview}</p>
        </article>
    )
}

export default Overview