import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import SearchPage from './SearchPage';
function index() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Zeitmovie - search</title>
        </Helmet>
      </HelmetProvider>
      <SearchPage />
    </>
  );
}

export default index;
