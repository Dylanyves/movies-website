import Pagination from '/components/Pagination'
import { TYPE_VARS } from '/vars'
import { Body } from '/components/Layout/index'
import { getNowPlaying } from '/services/index'

function Page({ movies }) {
    return (
        <div className="min-h-[90vh] bg-slate-700">
            <div className="max-w-7xl px-4 py-6 m-auto text-white">
                <Body type={TYPE_VARS.MOVIE} list={movies} title="In Theaters" />
                <Pagination totalPages={movies.total_pages} />
            </div>
        </div>
    )
}

export default Page

export async function getServerSideProps({ params }) {
    const page = parseInt(params.page)
    const data = await getNowPlaying(page)

    return {
        props: { movies: data }
    }
}