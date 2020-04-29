import React from "react";
import useApiData from "./useApiData";

function RandomQuote() {

  const quoteUrl = "https://programming-quotes-api.herokuapp.com/quotes/random";
  const [quoteData, isLoading, fetchNewUrl] = useApiData(quoteUrl);

  console.log('fetchNewUrl',fetchNewUrl)


  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        quoteData && (
          <>
            <blockquote>
              <span>{quoteData.en}</span>
              <cite> - {quoteData.author}</cite>
            </blockquote>
            <nav>
             <button onClick={() => fetchNewUrl(quoteUrl)}>More</button>
            </nav>
          </>
        )
      )}
    </>
  );
}

export default RandomQuote;
