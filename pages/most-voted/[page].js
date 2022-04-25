import React from 'react'

import { TYPE_VARS } from '/vars'
import Pagination from '/components/Pagination'
import { Body } from '/components/Layout/index'
import { getMostVoted } from '/services/index'

function Page({ movies }) {

    return (
        <div className="min-h-[90vh] bg-slate-700">
            <div className="max-w-7xl px-4 py-6 m-auto text-white">
                <Body type={TYPE_VARS.MOVIE} list={movies} title="Most Voted" />
                <Pagination totalPages={movies.total_pages} />
            </div>
        </div>
    )
}

export default Page

export async function getServerSideProps({ params }) {
    const page = parseInt(params.page)
    const data = await getMostVoted(page)

    return {
        props: { movies: data }
    }
}
