import React from 'react';

function Search() {
  return (
    <div>
      <style jsx>{`
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        font-family: 'Roboto Condensed', sans-serif;
        h2 {
          font-size: 2rem;
          margin-top: 50px;
          color: #BA5624;
          margin: 100px 0 20px;
        }
        .search-input {
          display: flex;
          justify-content: center;
          flex-direction: row;
          height: 32px;
        }
        input {
          width: 300px;
          border: 3px solid #617073;
          background: none;
        }
        button {
          margin-left: 10px;
          background: none;
          border: 3px solid #617073;
          color: #BA5624;
          font-family: 'Roboto Condensed', sans-serif;
        }
      `}</style>
      <h2>Search</h2>
      <div className="search-input">
        <input></input>
        <button>Search</button>
      </div>
    </div>
  );
}

export default Search;
