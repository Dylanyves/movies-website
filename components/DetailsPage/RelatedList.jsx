import React from 'react'
import Link from 'next/link'

function RelatedList({ type, relatedList }) {

    return (
        <aside>
            <h4 className="text-xl font-semibold border-l-4 px-2 border-yellow-500 mb-6">Similar Movies</h4>
            {relatedList && <div className="grid grid-cols-6 gap-2">
                {relatedList.map(item => (
                    <Link key={item.id} href={`/${type.toLowerCase()}/${item.id}`}>
                        <div className="cursor-pointer brightness-75 hover:brightness-100">
                            <img className="h-full w-full object-cover rounded-sm" src={`https://image.tmdb.org/t/p/w185/${item.poster_path}`} alt={item.original_title} />
                        </div>
                    </Link>
                ))}
            </div>}
        </aside>
    )
}

export default RelatedList