import Pagination from '/components/Pagination'
import { TYPE_VARS } from '/vars'
import { Body } from '/components/Layout/index'
import { getGenres, getMovieByGenres } from '/services/index'

function Page({ data }) {
    return (
        <div className="min-h-[90vh] bg-slate-700">
            <div className="max-w-7xl px-4 py-6 m-auto text-white">
                <Body type={TYPE_VARS.MOVIE} list={data.movies} title={data.genre} />
                <Pagination totalPages={data.movies.total_pages} />
            </div>
        </div>
    )
}

export default Page

export async function getServerSideProps({ params }) {
    const genre_name = params.genre_name
    const page = params.page

    const genres = await getGenres()
    const genre_id = await genres.genres.filter(genre => genre.name.toLowerCase().replace(" ", "-") === genre_name)[0].id
    const movies = await getMovieByGenres(genre_id, page)

    const data = {
        movies: movies,
        genre: genres.genres.filter(genre => genre.name.toLowerCase().replace(" ", "-") === genre_name)[0].name
    }

    return {
        props: { data: data }
    }
}
