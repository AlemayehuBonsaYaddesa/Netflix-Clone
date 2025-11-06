import React from "react";
import Row from "../Row/Row";
import requests from "../../../Utils/Requestes";
const RowList = () => {
  // console.log(requests);
  return (
    <>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
      <Row title="TV Shows" fetchUrl={requests.fetchTvShow} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies} />
      {/* <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} /> */}
    </>
  );
};

export default RowList;
