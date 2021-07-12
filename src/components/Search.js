import React from 'react';

class Search extends React.Component {
  render() {
    return (
      <form>
        <div data-testid="home-initial-message">
          <label htmlFor="input-search">
            <input
              id="input-search"
              type="text"
            />
            Digite algum termo de pesquisa ou escolha uma categoria.
          </label>
        </div>
      </form>
    );
  }
}

export default Search;
