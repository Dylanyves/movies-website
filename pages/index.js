import React from 'react'
import Link from 'next/link'

import { TYPE_VARS } from '/vars'
import { Body } from '/components/Layout/index'
import { getDiscoverMovies } from '/services/index'

export default function index({ movies }) {
    return (
        <>
            <div className="min-h-[90vh] bg-slate-700">
                <div className="max-w-7xl px-4 py-6 m-auto text-white">
                    <Body type={TYPE_VARS.MOVIE} list={movies} title="Discover" />

                    <div className="flex justify-center gap-x-2 mt-6">
                        <Link passHref href={`/discover/1`}><span className="text-sm cursor-pointer px-2 py-1 bg-yellow-600 hover:bg-yellow-700 ease-in duration-150 rounded-sm">Previous</span></Link>
                        <div className="px-3 py-1 bg-white rounded-sm text-black">1</div>
                        <Link passHref href={`/discover/2`}><span className="text-sm cursor-pointer px-2 py-1 bg-yellow-600 hover:bg-yellow-700 ease-in duration-150 rounded-sm">Next</span></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export async function getStaticProps() {
    const page = 1
    const movies = await getDiscoverMovies(page)

    return {
        props: { movies }
    }
}