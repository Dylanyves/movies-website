import Pagination from '/components/Pagination'
import { TYPE_VARS } from '/vars'
import { Body } from '/components/Layout/index'
import { getTvs } from '/services/index'

function Page({ tvSeries }) {
    return (
        <div className="min-h-[90vh] bg-slate-700">
            <div className="max-w-7xl px-4 py-6 m-auto text-white">
                <Body type={TYPE_VARS.TV} list={tvSeries} title="TV Series" />
                <Pagination totalPages={tvSeries.total_pages} />
            </div>
        </div>
    )
}

export default Page

export async function getServerSideProps({ params }) {
    const page = parseInt(params.page)
    const data = await getTvs(page)

    return {
        props: { tvSeries: data }
    }
}