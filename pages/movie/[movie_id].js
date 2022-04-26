import { TYPE_VARS } from '/vars'
import { getMovieDetails, getMovieTrailerLink, getMovieReviews, getSimilarMovies } from '/services/index'
import { Details, Header, Overview, RelatedList, Reviews, Trailer, Stats } from '/components/DetailsPage/index'
import { Helmet } from "react-helmet"

function MovieDetails({ data }) {
    return (
        <div className="min-h-[90vh] bg-slate-700">
            <Helmet>
                <title>{data.movie.original_title}</title>
                <meta name="description" content={data.movie.overview} />
                <meta property="og:image" content={data.movie.poster_path ? `https://image.tmdb.org/t/p/w185/${data.movie.poster_path}` : "https://www.chanchao.com.tw/images/default.jpg"} />
                <meta name="keywords" content={data.movie.original_title} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            </Helmet>
            <div className="max-w-7xl px-4 py-6 m-auto text-white">
                <Header type={TYPE_VARS.MOVIE} data={data.movie} />
                <Trailer trailerLink={data.trailerLink} />
                <Overview genres={data.movie.genres} overview={data.movie.overview} />
                <Stats data={data.movie} />
                <Details type={TYPE_VARS.MOVIE} data={data.movie} />
                <Reviews reviews={data.reviews} />
                <RelatedList type={TYPE_VARS.MOVIE} relatedList={data.relatedList} />
            </div>
        </div>
    )
}
export default MovieDetails

export async function getServerSideProps({ params }) {
    const movie_id = params.movie_id

    // Movie details
    const movie = await getMovieDetails(movie_id)

    // Movie trailer
    const links = await getMovieTrailerLink(movie_id)
    function getTrailerKey() {
        for (let i = 0; i < links.results.length; i++) {
            if (links.results[i].name.toLowerCase().includes("trailer")) {
                return links.results[i].key
            }
        }
    }
    const trailerLink = `https://www.youtube.com/embed/${getTrailerKey()}?autoplay=1`

    // Movie reviews
    const reviewsRes = await getMovieReviews(movie_id)
    const reviews = reviewsRes.results.slice(0, 5)

    // Movie related list
    const relatedListRes = await getSimilarMovies(movie_id)
    const relatedList = relatedListRes.results.slice(0, 6)

    const data = {
        movie: movie,
        trailerLink: trailerLink,
        reviews: reviews,
        relatedList: relatedList
    }
    return {
        props: { data: data }
    }
}
