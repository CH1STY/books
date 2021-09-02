import { useState } from "react";

import Loader from "./Loader";
import BooksMain from "./BooksMain";
function Books() {
  const [books, setBooks] = useState([]);
  const [inputData, setInputData] = useState("");
  const [isSearched, setIsSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [prevText, setPrevText] = useState("");
  const [total, setTotal] = useState(0);

  // useEffect(() => {
  //   async function setData() {
  //     const url = `https://openlibrary.org/search.json?q=${inputData}`;
  //     let data = await fetch(url);
  //     data = await data.json();
  //     setBooks(data.docs);
  //   }

  //   setData();
  // }, []);

  async function setData() {
    setIsLoading(true);
    if (prevText === inputData) {
      await setTimeout(() => {
        setIsLoading(false);
      }, 300);
    } else {
      const url = `https://openlibrary.org/search.json?q=${inputData}`;
      let data = await fetch(url);
      data = await data.json();
      setTotal(data.numFound);
      setBooks(data.docs);
      setIsLoading(false);
      setPrevText(inputData);
    }
  }

  const doSearch = () => {
    setIsSearched(true);
    setData();
  };

  const checker = () => {
    if (!isSearched) {
      return <h1 className="search-msg-info text-center">Please Search Something</h1>;
    } else if (isSearched && books.length > 0) {
      return (
        <h1 className="search-msg-success text-center">
          Showing Books {books.length} of {total} Results
        </h1>
      );
    } else {
      return <h1 className="search-msg-failed text-center">No Books Found</h1>;
    }
  };

  return (
    <div className="container ">
      <h1 className="text-center  mt-3 pt-3 fw-bold uppercase">Book Search</h1>
      <div className="d-flex mb-3 mt-5 w-75 m-auto  justify-content-center">
        <input
          type="search"
          className="form-control my-2  mx-sm-2"
          value={inputData}
          onChange={(e) => {
            setInputData(e.target.value);
          }}
          placeholder="Search"
        />
        <button
          className="btn btn-outline-dark mx-2"
          onClick={doSearch}
        >
          Search
        </button>
      </div>
      {!isLoading ? <BooksMain checker={checker} books={books} /> : <Loader />}
    </div>
  );
}

export default Books;
