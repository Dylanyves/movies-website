async function fetchData(link) {
    const movies = await fetch(link)
        .then(res => res.json())
        .then(data => { return data })

    return movies
}

export const key = process.env.API_KEY

export async function getDiscoverMovies(page) {
    const api = `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=${page}`
    const movies = await fetchData(api)
    return movies
}

export async function getUpcoming(page) {
    const api = `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=${page}`
    const movies = await fetchData(api)
    return movies
}

export async function getNowPlaying(page) {
    const api = `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=${page}`
    const movies = await fetchData(api)
    return movies
}

export async function getMostVoted(page) {
    const api = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&page=${page}&primary_release_date.lte=2022&with_watch_monetization_types=flatrate`
    const movies = await fetchData(api)
    return movies
}

export async function getTvs(page) {
    const api = `https://api.themoviedb.org/3/discover/tv?api_key=${key}&language=en-US&sort_by=vote_count.desc&page=${page}&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`
    const movies = await fetchData(api)
    return movies
}

export async function getGenres() {
    const api = `https://api.themoviedb.org/3/genre/movie/list?api_key=${key}&language=en-US`
    const genres = await fetchData(api)
    return genres
}

export async function getMovieByGenres(genre_id, page) {
    const api = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genre_id}&with_watch_monetization_types=flatrate`
    const movies = await fetchData(api)
    return movies
}

export async function getMovieDetails(movie_id) {
    const api = `
    https://api.themoviedb.org/3/movie/${movie_id}?api_key=${key}&language=en-US`
    const movie = await fetchData(api)
    return movie
}

export async function getTvDetails(tv_id) {
    const api = `https://api.themoviedb.org/3/tv/${tv_id}?api_key=${key}&language=en-US`
    const tv = await fetchData(api)
    return tv
}

export async function getMovieTrailerLink(movie_id) {
    const api = `https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${key}&language=en-US`
    const trailerLink = await fetchData(api)
    return trailerLink
}

export async function getTvTrailerLink(tv_id) {
    const api = `https://api.themoviedb.org/3/tv/${tv_id}/videos?api_key=${key}&language=en-US`
    const trailerLink = await fetchData(api)
    return trailerLink
}

export async function getMovieReviews(movie_id) {
    const api = `https://api.themoviedb.org/3/movie/${movie_id}/reviews?api_key=${key}&language=en-US&page=1`
    const reviews = await fetchData(api)
    return reviews
}

export async function getTvReviews(tv_id) {
    const api = `https://api.themoviedb.org/3/tv/${tv_id}/reviews?api_key=${key}&language=en-US&page=1`
    const reviews = await fetchData(api)
    return reviews
}
export async function getSimilarMovies(movie_id) {
    const api = `https://api.themoviedb.org/3/movie/${movie_id}/similar?api_key=${key}&language=en-US&page=1`
    const reviews = await fetchData(api)
    return reviews
}
export async function getSimilarTvs(tv_id) {
    const api = `https://api.themoviedb.org/3/tv/${tv_id}/similar?api_key=${key}&language=en-US&page=1`
    const reviews = await fetchData(api)
    return reviews
}

export async function searchMovies(query, page) {
    const api = `
    https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${query}&page=${page}&include_adult=false`
    const movies = await fetchData(api)
    return movies
}