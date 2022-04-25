import React from 'react'
import Link from 'next/link'

function Footer() {
    return (
        <footer className='bg-slate-900 min-h-[5vh] static bottom-0'>
            <div className="text-white max-w-7xl m-auto px-4 py-2 text-sm sm:text-base">
                <Link href="/about">
                    About
                </Link>
            </div>
        </footer>
    )
}

export default Footer