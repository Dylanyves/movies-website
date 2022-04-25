import React from 'react'
import { useRouter } from 'next/router'

import { PAGINATION } from '/vars'
import { parse } from 'postcss'

function Pagination({ totalPages }) {
    const router = useRouter()
    const { asPath } = useRouter()
    const { query: { page: currentPage } } = useRouter()

    function paginationHandler(handler) {
        if (handler === PAGINATION.PREVIOUS && parseInt(currentPage) > 1) {
            const destination = asPath.slice(0, -1) + (parseInt(currentPage) - 1).toString()
            router.push(destination)
        }
        else if (handler === PAGINATION.NEXT && parseInt(currentPage) < totalPages) {
            const destination = asPath.slice(0, -1) + (parseInt(currentPage) + 1).toString()
            router.push(destination)
        }
    }

    return (
        <>
            {!isNaN(parseInt(currentPage)) && <div className="flex justify-center gap-x-2 mt-6">
                <button disabled={currentPage[0] === '1'} onClick={() => paginationHandler(PAGINATION.PREVIOUS)} className="disabled:bg-yellow-700 text-sm cursor-pointer px-2 py-1 bg-yellow-600 hover:bg-yellow-700 ease-in duration-150 rounded-sm">Previous</button>
                <div className="px-3 py-1 bg-white rounded-sm text-black">{parseInt(currentPage)}</div>
                <button disabled={parseInt(currentPage[0]) === totalPages || totalPages === 0} onClick={() => paginationHandler(PAGINATION.NEXT)} className="disabled:bg-yellow-700 text-sm cursor-pointer px-2 py-1 bg-yellow-600 hover:bg-yellow-700 ease-in duration-150 rounded-sm">Next</button>
            </div>}
        </>
    )
}

export default Pagination