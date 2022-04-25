import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { FaKaggle } from 'react-icons/fa'



function about() {
    return (
        <div className="relative min-h-[90vh] bg-slate-700">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 text-center font-light">
                <p className="text-white">This web is created by Dylan Mac Yves</p>
                <div className="flex gap-x-2 justify-center text-white">
                    <a className="hover:text-yellow-500 ease-in duration-100 text-xl" rel="noreferrer" target="_blank" href="https://www.instagram.com/sceeinc_002/"><AiFillInstagram /></a>
                    <a className="hover:text-yellow-500 ease-in duration-100 text-xl" rel="noreferrer" target="_blank" href="https://github.com/Dylanyves"><AiFillGithub /></a>
                    <a className="hover:text-yellow-500 ease-in duration-100 text-xl" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/dylan-yves-7093741b3/"><AiFillLinkedin /></a>
                    <a className="hover:text-yellow-500 ease-in duration-100 text-xl" rel="noreferrer" target="_blank" href="https://www.kaggle.com/dylanyves"><FaKaggle /></a>
                </div>
            </div>
        </div>
    )
}

export default about