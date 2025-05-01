import { Movies } from '../types'

export const fetchNowPlaying = async () : Promise<Movies[]> => {
  try{
    const res = await fetch('https://api.themoviedb.org/3/movie/now_playing',{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
      },
    })

    if(!res.ok){
      throw new Error('Failed to fetch movies')
    }

    const data = await res.json()
    console.log(data.results)
    return data.results
  }catch(e){
    console.error("Failed to fetch movies", e)
    return []
  }
}

export const fetchPopular = async () : Promise<Movies[]> => {
  try{
    const res = await fetch('https://api.themoviedb.org/3/movie/popular',{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
      },
    })

    if(!res.ok){
      throw new Error('Failed to fetch movies')
    }

    const data = await res.json()
    console.log(data.results)
    return data.results
  }catch(e){
    console.error("Failed to fetch movies", e)
    return []
  }
}

export const fetchTopRated = async () : Promise<Movies[]> => {
  try{
    const res = await fetch('https://api.themoviedb.org/3/movie/upcoming',{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
      },
    })

    if(!res.ok){
      throw new Error('Failed to fetch movies')
    }

    const data = await res.json()
    console.log(data.results)
    return data.results
  }catch(e){
    console.error("Failed to fetch movies", e)
    return []
  }
}

export const fetchUpcoming = async () : Promise<Movies[]> => {
  try{
    const res = await fetch('https://api.themoviedb.org/3/movie/top_rated',{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
      },
    })

    if(!res.ok){
      throw new Error('Failed to fetch movies')
    }

    const data = await res.json()
    console.log(data.results)
    return data.results
  }catch(e){
    console.error("Failed to fetch movies", e)
    return []
  }
}

