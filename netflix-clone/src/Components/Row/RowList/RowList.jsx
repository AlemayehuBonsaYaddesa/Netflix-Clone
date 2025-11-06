import React from "react";
import Row from "../Row/Row";
import requests from "../../../Utils";
const RowList = () => {
  console.log(requests);
  return (
    <>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      {/* <Row />
      <Row />
      <Row /> */}
    </>
  );
};

export default RowList;
