import React from 'react';
import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { searchMovies } from '../../../../features/search/searchSlice';

function Search() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [search, setSearch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchMovies(search));

    if (search <= 0) {
      setSearch('');
    } else {
      navigate(`/search/?s=${search}`, { replace: true });
    }
  };
  const handleInput = (e) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <div className=" relative  mx-auto flex items-center pt-2 text-gray-600">
          <input
            type="text"
            name="search"
            id="search"
            className=" h-8 w-11/12 rounded-full border px-4 text-base transition-all focus:outline-none focus:ring-1 focus:ring-gray-500 sm:w-10/12"
            placeholder="Search ..."
            onChange={handleInput}
          />
          <button
            className="absolute  right-12  hover:text-gray-500 "
            aria-labelledby="search"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </div>
      </form>
    </>
  );
}

export default Search;
