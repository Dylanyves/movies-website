import React from 'react'

function Trailer({ trailerLink }) {
    return (
        <div className="col-span-3 relative w-full pb-[56.25%] h-0 mb-6">
            <iframe className="absolute top-0 left-0 w-full h-full" width="560" height="315" src={trailerLink} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    )
}

export default Trailer