import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Movie } from '../types';

interface RowProps {
  title: string;
  movies: Movie[];
  onMovieClick: (movie: Movie) => void;
}

export const Row: React.FC<RowProps> = ({ title, movies, onMovieClick }) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState(false);

  const handleClick = (direction: 'left' | 'right') => {
    setIsMoved(true);
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth 
        : scrollLeft + clientWidth;
      
      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-2 group">
      <h2 className="w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl">
        {title}
      </h2>
      <div className="relative md:-ml-2">
        <ChevronLeft
          className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${!isMoved && 'hidden'}`}
          onClick={() => handleClick('left')}
        />

        <div
          ref={rowRef}
          className="flex items-center space-x-2.5 overflow-x-scroll no-scrollbar md:space-x-4 md:p-2"
        >
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="relative min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105"
              onClick={() => onMovieClick(movie)}
            >
              <img
                src={movie.backdropUrl}
                alt={movie.title}
                className="rounded-sm object-cover md:rounded w-full h-full"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-2 opacity-0 hover:opacity-100 transition-opacity">
                 <p className="text-xs font-bold text-white truncate">{movie.title}</p>
                 <p className="text-[10px] text-green-400">{Math.round(movie.rating * 10)}% Match</p>
              </div>
            </div>
          ))}
        </div>

        <ChevronRight
          className="absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100"
          onClick={() => handleClick('right')}
        />
      </div>
    </div>
  );
};