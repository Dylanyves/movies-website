import { useRouter } from 'next/router'

import { searchMovies } from '/services/index'
import { TYPE_VARS } from '/vars'
import { Body } from '/components/Layout/index'
import Pagination from '/components/Pagination'

function SearchMovie({ movies }) {
    const { query } = useRouter()
    return (
        <div className="min-h-[90vh] bg-slate-700">
            <div className="max-w-7xl px-4 py-6 m-auto text-white">
                <Body type={TYPE_VARS.MOVIE} list={movies} title={query.query} />
                <Pagination totalPages={movies.total_pages} />
            </div>
        </div>
    )
}

export default SearchMovie

export async function getServerSideProps({ params }) {
    const query = params.query
    const page = params.page
    const movies = await searchMovies(query, page)

    return {
        props: { movies }
    }
}