'use client'
import { useEffect, useState } from "react";
import { Movies } from "../types";
import { fetchNowPlaying, fetchPopular, fetchTopRated, fetchUpcoming } from "../api/movie_api";
import Mainlayout from "@/components/layout/MainLayout";
import Card from "./components/Card";


export default function MainPageClient() {
  const [nowPlaying, setNowPlaying] = useState<Movies[]>([])
  const [popular, setPopular] = useState<Movies[]>([])
  const [topRated, setTopRated] = useState<Movies[]>([])
  const [upcoming, setUpcoming] = useState<Movies[]>([])
  const [loading, setLoading] = useState<Boolean>(true)

  useEffect(() => {
    const fetch = async() => {
      const nowPlayingRes = await fetchNowPlaying()
      const popularRes = await fetchPopular()
      const topRatedRes = await fetchTopRated()
      const upcomingRes = await fetchUpcoming()
      setNowPlaying(nowPlayingRes)
      setPopular(popularRes)
      setTopRated(topRatedRes)
      setUpcoming(upcomingRes)
      setLoading(false)
    }

    fetch()
  }, [])

  if (loading) return <h1>Loading</h1>

  return (
    <div>
      <Mainlayout>
        <h2 className="text-2xl font-semibold py-3 no-scrollbar overflow-auto">#Upcoming</h2>
        <div className="overflow-auto flex gap-2 max-w-full scrollbar-hide">
            {upcoming.map((item, index) => {
              return (
                  <Card key={index} releaseDate={item.release_date} imgUrl={item.poster_path} title={item.original_title} />
              );
            })}
        </div>

        <h2 className="text-2xl font-semibold py-3">#Now Playing</h2>
        <div className="overflow-auto flex gap-2 max-w-full scrollbar-hide">
            {nowPlaying.map((item, index) => {
              return (
                  <Card key={index} releaseDate={item.release_date} imgUrl={item.poster_path} title={item.original_title} />
              );
            })}
        </div>

        <h2 className="text-2xl font-semibold py-3">#TopRated</h2>
        <div className="overflow-auto flex gap-2 max-w-full scrollbar-hide">
            {topRated.map((item, index) => {
              return (
                  <Card key={index} releaseDate={item.release_date} imgUrl={item.poster_path} title={item.original_title} />
              );
            })}
        </div>

        <h2 className="text-2xl font-semibold py-3">#Popular</h2>
        <div className="overflow-auto flex gap-2 max-w-full scrollbar-hide">
            {popular.map((item, index) => {
              return (
                  <Card key={index} releaseDate={item.release_date} imgUrl={item.poster_path} title={item.original_title} />
              );
            })}
        </div>
      </Mainlayout>
    </div>
  );
}
