import React from 'react'

function Reviews({ reviews }) {
    return (
        <section className="mb-10">
            <h4 className="text-xl font-semibold border-l-4 px-2 border-yellow-500 mb-6">Reviews</h4>
            {reviews.length > 0 ? <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                {reviews.map(review => (
                    <div key={review.id} className="bg-slate-800 p-2 rounded-sm border-l-4 border-slate-900">
                        <div>
                            <span className="text-yellow-500 font-semibold">{review.author}</span>
                        </div>
                        <div>
                            <p className="text-sm font-light">{`${review.content.slice(0, 300)}...`}</p>
                        </div>
                    </div>
                ))}
            </div> : <span className="text-slate-300">No Reviews</span>}
        </section>
    )
}

export default Reviews