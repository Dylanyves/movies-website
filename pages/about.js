
function about() {
    return (
        <div className="relative min-h-[90vh] bg-slate-700">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 text-center font-light">
                <p className="text-white">This web is created by Dylan Mac Yves</p>
                <div className="flex gap-x-2 justify-center text-white">
                    <a className="hover:text-yellow-500 ease-in duration-100" target="_blank" href="https://www.instagram.com/sceeinc_002/"><i className="fab fa-instagram"></i></a>
                    <a className="hover:text-yellow-500 ease-in duration-100" target="_blank" href="https://github.com/Dylanyves"><i className="fab fa-github"></i></a>
                    <a className="hover:text-yellow-500 ease-in duration-100" target="_blank" href="https://www.linkedin.com/in/dylan-yves-7093741b3/"><i className="fab fa-linkedin"></i></a>
                    <a className="hover:text-yellow-500 ease-in duration-100" target="_blank" href="https://www.kaggle.com/dylanyves"><i className="fab fa-kaggle"></i></a>
                </div>
            </div>
        </div>
    )
}

export default about