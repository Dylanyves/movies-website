import { getGenres } from '../../services/index'
import Link from 'next/link'

function index({ genres }) {
    return (
        <div className="min-h-[90vh] bg-slate-700">
            <div className="max-w-7xl px-4 py-6 m-auto text-white">
                <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
                    {genres.genres.map(genre => (

                        <Link href={`genre/${genre.name.toLowerCase().replace(" ", "-")}/1`}>
                            <li className="hover:text-yellow-500 cursor-pointer md:text-xl rounded-sm bg-slate-800 inline-flex px-4 py-8" key={genre.id}>
                                <span className="w-full text-center">{genre.name}</span>
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default index

export async function getStaticProps() {
    const genres = await getGenres()
    return {
        props: { genres: genres }
    }
}