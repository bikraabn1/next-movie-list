import React from 'react'

interface CardProps{
    title : string,
    releaseDate : string,
    imgUrl : string
}

const Card = ({title, releaseDate, imgUrl} : CardProps) => {
  return (
    <div className='relative w-44 h-auto aspect-[2/3] rounded-2xl overflow-hidden shadow-lg group flex-shrink-0'>
      <img src={'https://image.tmdb.org/t/p/w500/' + imgUrl} alt="title" className='w-full h-full object-cover transition-transform group-hover:scale-105'/>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
        <h3 className="font-bold text-sm truncate">{title}</h3>
        <div className="flex items-center gap-1">
          <span className="text-xs">{releaseDate}</span>
        </div>
      </div>
    </div>
  )
}

export default Card
