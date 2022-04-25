import React from 'react'

import { TYPE_VARS } from '/vars'
function Details({ type, data }) {

    return (
        <div className="text-sm mb-10">
            <h4 className="text-xl font-semibold border-l-4 px-2 border-yellow-500">More Information</h4>

            <div className="border-b py-3 border-slate-500">
                <span className="mr-1">Homepage: </span>
                {data.homepage ? <a target="_blank" className="text-blue-400" href="https://www.spidermannowayhome.data">{data.homepage}</a> : <span>None</span>}
            </div>

            <div className="border-b py-3 border-slate-500">
                <span className="mr-1">Tagline: </span>
                <i className="font-light">{data.tagline ? data.tagline : 'None'}</i>
            </div>

            {type === TYPE_VARS.MOVIE && <div className="border-b py-3 border-slate-500">
                <span className="mr-1">Release Date: </span>
                <span className="font-light">{data.release_date}</span>
            </div>}

            {type === TYPE_VARS.MOVIE && <div className="border-b py-3 border-slate-500">
                <span className="mr-1">Budget: </span>
                <span className="font-light">{data.budget !== 0 ? `$${data.budget}` : 'None'}</span>
            </div>}

            {type === TYPE_VARS.MOVIE && <div className="border-b py-3 border-slate-500">
                <span className="mr-1">Revenue: </span>
                <span className="font-light">{data.revenue !== 0 ? `$${data.revenue}` : 'None'}</span>
            </div>}

            {type === TYPE_VARS.TV && <div className="border-b py-3 border-slate-500">
                <span className="mr-1">Total Season: </span>
                <span className="font-light">{data.number_of_seasons}</span>
            </div>}

            {type === TYPE_VARS.TV && <div className="border-b py-3 border-slate-500">
                <span className="mr-1">Total Episodes: </span>
                <span className="font-light">{data.number_of_episodes}</span>
            </div>}

            <div className="border-b py-3 border-slate-500 flex gap-2 flex-wrap">
                <span className="mr-1">Production Companies: </span>
                <div className="flex gap-2 flex-wrap">
                    {data.production_companies.map(company => (
                        <span key={company.id} className="bg-blue-500 rounded-sm text-xs px-1 py-[2px] whitespace-nowrap">{company.name}</span>
                    ))}
                </div>
            </div>

            <div className="border-b py-3 border-slate-500 flex flex-wrap">
                <span className="mr-1">Production Countries: </span>
                <div className="flex gap-x-2">
                    {data.production_countries.map(country => (
                        <span className="font-light" key={country.name}>{country.name},</span>
                    ))}
                </div>
            </div>

            <div className="border-b py-3 border-slate-500 flex flex-wrap">
                <span className="mr-1">Spoken Languages: </span>
                <div className="flex gap-x-2">
                    {data.spoken_languages.map(language => (
                        <span className="font-light" key={language.name}>{language.english_name},</span>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Details