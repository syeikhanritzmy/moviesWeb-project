import React from 'react';
import { useEffect } from 'react';

import { useSelector } from 'react-redux';
import Skeleton from '../../UI/atoms/skeleton/Skeleton';
import Card from '../../UI/organisms/card/Card';

function SearchPage() {
  const searchMovies = useSelector((state) => state.search.search);
  const loading = useSelector((state) => state.search.loading);

  console.log(searchMovies);

  const getSearchParams = () => {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const sParams = params.get('s');
    return sParams;
  };

  const cardSkeleton = () => {
    return [1, 2, 3, 4, 5, 6, 7, 8].map((item) => <Skeleton key={item} />);
  };
  return (
    <div className="layout my-8 md:my-12">
      <h2 className="text-lg font-semibold capitalize text-gray-900 md:text-xl">
        Search Result For "{getSearchParams()}"
      </h2>

      <div className="mt-8 grid justify-items-center gap-2 sx:grid-cols-2 xs:gap-4 sm:grid-cols-3 md:gap-8 lg:grid-cols-4">
        {loading
          ? cardSkeleton()
          : searchMovies?.map((movie, index) => (
              <Card
                key={index}
                moviePoster={movie.Poster}
                movieAlt={movie.Title}
                movieTitle={movie.Title}
              />
            ))}
      </div>
    </div>
  );
}

export default SearchPage;
