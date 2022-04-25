export default function Custom500() {
    return (
        <div className="relative min-h-[90vh] bg-slate-700">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 text-center">
                <h1 className="font-bold text-7xl text-yellow-600">500</h1>
                <p className="text-sm text-white">Server-side error occurred</p>
            </div>
        </div>
    )
}