import { TYPE_VARS } from '/vars'
import { getTvDetails, getTvTrailerLink, getTvReviews, getSimilarTvs } from '/services/index'
import { Details, Header, Overview, RelatedList, Reviews, Trailer } from '/components/DetailsPage/index'
import { Helmet } from 'react-helmet'

function TVDetails({ data }) {
    return (
        <div className="min-h-[90vh] bg-slate-700">
            {/* <Helmet>
                <title>{data.tv.name}</title>
                <meta name="description" content={data.tv.overview} />
                <meta property="og:image" content={data.tv.poster_path ? `https://image.tmdb.org/t/p/w185/${data.tv.poster_path}` : 'https://www.chanchao.com.tw/images/default.jpg'} />
                <meta name="keywords" content={data.tv.name} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Helmet> */}
            <div className="max-w-7xl px-4 py-6 m-auto text-white">
                <div className="min-h-[90vh] bg-slate-700">
                    <div className="max-w-7xl px-4 py-6 m-auto text-white">
                        <Header type={TYPE_VARS.TV} data={data.tv} />
                        <Trailer trailerLink={data.trailerLink} />
                        <Overview genres={data.tv.genres} overview={data.tv.overview} />
                        <Details type={TYPE_VARS.TV} data={data.tv} />
                        <Reviews reviews={data.reviews} />
                        <RelatedList type={TYPE_VARS.TV} relatedList={data.relatedList} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TVDetails

export async function getServerSideProps({ params }) {
    const tv_id = params.tv_id

    // Tv details
    const tv = await getTvDetails(tv_id)

    // Tv trailer
    const links = await getTvTrailerLink(tv_id)
    function getTrailerKey() {
        for (let i = 0; i < links.results.length; i++) {
            if (links.results[i].name.toLowerCase().includes("trailer")) {
                return links.results[i].key
            }
        }
    }
    const trailerLink = `https://www.youtube.com/embed/${getTrailerKey()}?autoplay=1`

    // Tv reviews
    const reviewsRes = await getTvReviews(tv_id)
    const reviews = reviewsRes.results.slice(0, 5)

    // Tv related list
    const relatedListRes = await getSimilarTvs(tv_id)
    const relatedList = relatedListRes.results.slice(0, 6)

    const data = {
        tv: tv,
        trailerLink: trailerLink,
        reviews: reviews,
        relatedList: relatedList
    }
    return {
        props: { data: data }
    }
}