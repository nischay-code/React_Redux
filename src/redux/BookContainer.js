import React from "react";
import { useSelector } from "react-redux";
const BookContainer = () => {
  const noOfBooks = useSelector((state) => state.NumberOfBook);
  return (
    <>
      <h1>BookContainer</h1>
      <h2>Number of Books - {noOfBooks}</h2>
    </>
  );
};

export default BookContainer;
